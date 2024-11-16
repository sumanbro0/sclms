import api from '@/lib/utils';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

// Types
export interface Class {
  id: number;
  school_id: number;
  name: string;
  grade_level: number;
  stream: string;
  capacity: number;
  promotion_criteria: {
    minimum_attendance: number;
    minimum_grade: number;
  };
  grading_system_id: number;
}

export interface ClassFormData {
  school_id: number;
  name: string;
  grade_level: number;
  stream: string;
  capacity: number;
  promotion_criteria: {
    minimum_attendance: number;
    minimum_grade: number;
  };
  grading_system_id: number;
}

export interface Section {
  id: number;
  class_id: number;
  name: string;
  capacity: number;
  teacher_id: number;
  room_id: number;
}

export interface Subject {
  id: number;
  name: string;
  code: string;
  category: 'core' | 'elective' | 'optional';
  assessment_config: {
    components: {
      name: string;
      weightage: number;
    }[];
  };
  grading_schema: Record<string, any>;
  resources: {
    type: string;
    url: string;
  }[];
}

export interface ApiResponse<T> {
  data: T[];
  meta?: {
    page: number;
    per_page: number;
    total: number;
  };
}

// Get Sections and Subjects
export const useGetClassSections = (classId: string) => {
  return useQuery<ApiResponse<Section>, Error>({
    queryKey: ['class-sections', classId],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<Section>>(`/classes/${classId}/sections`);
      return data;
    },
  });
};

export const useGetClassSubjects = (classId: string) => {
  return useQuery<ApiResponse<Subject>, Error>({
    queryKey: ['class-subjects', classId],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<Subject>>(`/classes/${classId}/subjects`);
      return data;
    },
  });
};

// CRUD operations for Classes
export const useGetClasses = () => {
  return useQuery<ApiResponse<Class>, Error>({
    queryKey: ['classes'],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<Class>>('/classes');
      return data;
    },
  });
};

export function useSingleClass(id: string) {
  return useQuery<{data: Class}>({
    queryKey: ['class', id],
    queryFn: async () => {
      const { data } = await api.get(`/classes/${id}`);
      return data;
    },
  });
}

export function useCreateClass() {
  const queryClient = useQueryClient();

  return useMutation<any, AxiosError, ClassFormData>({
    mutationFn: async (data: ClassFormData) => {
      const response = await api.post('/classes', data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['classes'] });
      toast.success('Class successfully added');
    },
    onError: (error: AxiosError) => {
      console.error('Error adding class:', error);
      toast.error(error.message || 'Failed to add class');
    },
  });
}

export function useUpdateClass() {
  const queryClient = useQueryClient();

  return useMutation<any, AxiosError, ClassFormData & { id: string }>({
    mutationFn: async ({ id, ...data }) => {
      const response = await api.put(`/classes/${id}`, data);
      return response.data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['classes'] });
      queryClient.invalidateQueries({ queryKey: ['class', variables.id] });
      toast.success('Class updated successfully');
    },
    onError: (error: AxiosError) => {
      console.error('Error updating class:', error);
      toast.error(error.message || 'Failed to update class');
    },
  });
}

export function useDeleteClass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (classId: string) => {
      const response = await api.delete(`/classes/${classId}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['classes'] });
      toast.success('Class deleted successfully');
    },
    onError: (error: AxiosError) => {
      console.error('Error deleting class:', error);
      toast.error(error.message || 'Failed to delete class');
    },
  });
}
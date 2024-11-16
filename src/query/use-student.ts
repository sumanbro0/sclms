import api from '@/lib/utils';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Student, StudentFormData } from '@/types/student';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';


interface StudentResponse {
  data: Student[];
  meta: {
    page: number;
    per_page: number;
    total: number;
  };
}

const fetchStudents = async (): Promise<StudentResponse> => {
  const { data } = await api.get<StudentResponse>('/students');
  return data;
};

export const useGetStudents = () => {
  return useQuery<StudentResponse, Error>({
    queryKey: ['students'],
    queryFn: fetchStudents,
  });
};

export function useStudentMutation() {
  const queryClient = useQueryClient();

  return useMutation<any, AxiosError, StudentFormData>({
    mutationFn: async (data: StudentFormData) => {
      const response = await api.post('/students', data);
      return response.data;
        },
        onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      toast.success('Student successfully added');
        },
        onError: (error: AxiosError) => {
      console.error('Error adding student:', error);
      toast.error(error.message || 'Failed to add student');
        },
      });
}



export function useSingleStudent(id: string) {
  return useQuery<{data:Student}>({
    queryKey: ['student', id],
    queryFn: async () => {
      const response = await api.get(`/students/${id}`);
      console.log(id)
      return response.data;
    },
  });
}

export function useStudentUpdate() {
  const queryClient = useQueryClient();

  return useMutation<any, AxiosError, StudentFormData & { id: string }>({
    mutationFn: async ({ id, ...data }) => {
      const response = await api.put(`/students/${id}`, data);
      return response.data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      queryClient.invalidateQueries({ queryKey: ['student', variables.id] });
      toast.success('Student updated successfully');
    },
    onError: (error: AxiosError) => {
      console.error('Error updating student:', error);
      toast.error(
        error.message || 'Failed to update student'
      );
    },
  });
}



export function useDeleteStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (studentId: string) => {
      const response = await api.delete(`/students/${studentId}`);
      return response.data;
    },
    onSuccess: () => {
      // Invalidate and refetch students list
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });
}
import api from '@/lib/utils';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Employee, EmployeeFormData } from '@/types/staff';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

interface EmployeeResponse {
  data: Employee[];
  meta: {
    page: number;
    per_page: number;
    total: number;
  };
}

// GET - Fetch all employees
const fetchEmployees = async (): Promise<EmployeeResponse> => {
  const { data } = await api.get<EmployeeResponse>('/staff');
  return data;
};

export const useGetEmployees = () => {
  return useQuery<EmployeeResponse, Error>({
    queryKey: ['employees'],
    queryFn: fetchEmployees,
  });
};

// POST - Create new employee
export function useEmployeeMutation() {
  const queryClient = useQueryClient();

  return useMutation<any, AxiosError, EmployeeFormData>({
    mutationFn: async (data: EmployeeFormData) => {
      const response = await api.post('/staff', data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['employees'] });
      toast.success('Employee successfully added');
    },
    onError: (error: AxiosError) => {
      console.error('Error adding employee:', error);
      toast.error(error.message || 'Failed to add employee');
    },
  });
}
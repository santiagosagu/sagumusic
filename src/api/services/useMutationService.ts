/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import fetchMutation from "../endPoints/fetchMutation";

interface Iprops {
  resource: any;
  params: any;
}

export const useMutationService: any = ({ resource, params }: Iprops) => {
  return useMutation({
    mutationFn: (data) => fetchMutation({ data, resource, params }),
  });
};

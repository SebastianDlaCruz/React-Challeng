import { ApiResponse } from "../model/AccountInfo.model";

export const getAccountInfo = async (): Promise<ApiResponse> => {
  try {

    const response = await fetch('https://api.npoint.io/97d89162575a9d816661');
    if (!response.ok) throw Error('ups ocurrió un error');
    const data = await response.json();
    return {
      status: true,
      data
    }
  } catch (error) {
    console.error(error);
    return {
      status: false,
      statusText: "Error al consumir la api"
    }
  }
}
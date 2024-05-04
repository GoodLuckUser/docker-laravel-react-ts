import React, { FC } from 'react'
import { useAuthContext } from '../../contexts/auth/AuthProvider';

type UsePermissionsTypes = {
  permission: boolean
}

export const usePermissions = (): UsePermissionsTypes => {
  const { state } = useAuthContext();
  const permissionId = 1;

  switch (permissionId) {
    case 1:
      return {
        permission: true
      };
    default:
      return {
        permission: false
      };
  }

}


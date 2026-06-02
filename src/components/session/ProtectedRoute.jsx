import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useCareerStore } from '../../store/useCareerStore'

export default function ProtectedRoute({ role }) {
  const isAuthenticated = useCareerStore((state) => state.isAuthenticated)
  const selectedRole = useCareerStore((state) => state.selectedRole)

  if (!isAuthenticated || selectedRole !== role) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

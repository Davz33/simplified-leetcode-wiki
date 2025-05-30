import React from 'react';

interface InfoPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function InfoPanel({ children, className = "" }: InfoPanelProps) {
  return (
    <div className={`w-full max-w-md text-sm bg-gray-50 rounded p-2 mb-2 ${className}`}>
      {children}
    </div>
  );
}

interface InfoRowProps {
  label: string;
  value: React.ReactNode;
  className?: string;
}

export function InfoRow({ label, value, className = "" }: InfoRowProps) {
  return (
    <div className={className}>
      {label}: <b>{value}</b>
    </div>
  );
} 
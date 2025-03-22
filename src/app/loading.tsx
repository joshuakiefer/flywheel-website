export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-primary border-t-transparent"></div>
        <p className="text-sm text-gray-600">Loading...</p>
      </div>
    </div>
  )
} 
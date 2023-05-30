import { useEffect } from "react"

export default function NotFound() {

  useEffect(() => {
    document.title = "Not Found - Instagram";
  }, [])

  return (
    <div className="bg-gray-background">
      <div className="mx-auth max-w-full">
        <h1 className="text-center text-3xl">Not Found!</h1>
      </div>
    </div>
  )
}
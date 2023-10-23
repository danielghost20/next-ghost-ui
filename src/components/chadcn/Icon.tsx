import Link from "next/link"
import clsx from "clsx"

export default function Icon ({ icon, url, className }: { icon: React.ReactNode, url?: string, className?: string}) {
  return (
    typeof url === 'string' ? 
      <Link href={url} target="blank" className={clsx("p-2 rounded-md border-2", className)}>
          {icon}
      </Link>
      :
      <div className={clsx(className)}>
      {icon}
      </div>
  )
}
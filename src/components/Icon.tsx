import Link from "next/link";

export default function Icon({ icon, url }: { icon: React.ReactNode, url: string }) {
    return (
        <Link href={url} className="p-2 rounded-md border-2">
            {icon}
        </Link>
    )
}
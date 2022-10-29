import { useRouter } from 'next/router'
import Link from 'next/link'

const CustomErrorPage = () => {
    const router = useRouter()

    return (
        <>
            <div>{router.asPath} ページは存在しません</div>
            <Link href={"/"}>ホームに戻る</Link>
        </>
    )
}

export default CustomErrorPage

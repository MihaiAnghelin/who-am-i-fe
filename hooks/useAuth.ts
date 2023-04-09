import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export function useAuth()
{
    const [mounted, setMounted] = useState(false);

    const router = useRouter();

    useEffect(() =>
    {
        if (!mounted)
        {
            setMounted(true);
            return;
        }

        if (!localStorage.getItem("token"))
        {
            router.push("/admin/login");
        }
    }, [mounted]);
}
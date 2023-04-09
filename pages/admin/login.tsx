import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useMutation} from "react-query";
import {login} from "@/requests/admin";
import {Login} from "@/types/Login";
import H2 from "@/components/general/H2";
import Input from "@/components/general/Input";
import {Button, CircularProgress, Typography} from "@mui/material";
import Box from "@/components/general/Box";
import {useRouter} from "next/router";

const Login = () =>
{
    const router = useRouter();

    const [loginError, setLoginError] = useState<string>("");

    const {
        handleSubmit,
        reset,
        control,
        formState: {errors},
    } = useForm<Login>();

    const submitForm = (data: Login) =>
    {
        mutateLogin(data);
    };

    const {
        mutate: mutateLogin,
        isLoading: isLoadingLogin,
    } = useMutation(login, {
        onSuccess: (response) =>
        {
            if (response.statusCode === 200)
            {
                localStorage.setItem("token", response.data.token);
                router.push("/admin");
            }
            else
            {
                setLoginError(response.error);
                console.error(response);
            }

            reset();
        },
    });


    return (
        <div>
            <h1>Login</h1>

            <Box className="w-96 p-7">

                <H2>Login</H2>

                <form onSubmit={handleSubmit(submitForm)}>
                    <Input
                        name={"username"}
                        control={control}
                        defaultValue={""}
                        label={"Username"}
                        errors={!!errors.username}
                        errorMessage={errors.username?.message}
                        className="mb-5"
                    />

                    <Input
                        name={"password"}
                        control={control}
                        defaultValue={""}
                        label={"Password"}
                        errors={!!errors.password}
                        errorMessage={errors.password?.message}
                        className="mb-5"
                        type={"password"}
                    />

                    {loginError && <Typography color={"error"}>{loginError}</Typography>}

                    <Button
                        variant={"contained"}
                        disabled={isLoadingLogin}
                        type="submit"
                        className="w-full mt-5"
                    >
                        {!isLoadingLogin && "Login"}
                        {isLoadingLogin &&
                            <CircularProgress/>}
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default Login;

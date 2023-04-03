import React, {useEffect, useState} from "react";
import {Button, CircularProgress, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {Login} from "@/types/Login";
import Input from "@/components/general/Input";
import {useMutation} from "react-query";
import {login} from "@/requests/admin";
import H2 from "@/components/general/H2";
import Box from "@/components/general/Box";
import Modal from "@/components/general/Modal";

type Props = {};

const LoginModal = (
    {}: Props): JSX.Element =>
{
    const [loginError, setLoginError] = useState<string>("");
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () =>
    {
        const token = localStorage.getItem("token");

        if (token === null || token === "" || token === undefined)
            return;

        setOpen(false);
    };

    useEffect(() =>
    {
        localStorage?.getItem("token") ? handleClose() : handleOpen();
    }, []);

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
                localStorage.setItem("token", response.data.token);
            else
            {
                setLoginError(response.error);
                console.error(response);
            }

            reset();
            handleClose();
        },
    });

    return (
        <Modal
            open={open}
        >
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
        </Modal>
    );
};

export default LoginModal;
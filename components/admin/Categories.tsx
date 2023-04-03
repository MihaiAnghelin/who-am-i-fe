import React from "react";
import {useForm} from "react-hook-form";
import H2 from "@/components/general/H2";
import Box from "@/components/general/Box";
import H3 from "@/components/general/H3";
import {Button, CircularProgress} from "@mui/material";
import {Category} from "@/types/Category";
import Input from "@/components/general/Input";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {createCategory, deleteCategory, getCategories} from "@/requests/admin";

type Props = {};

const Categories = (
    {}: Props): JSX.Element =>
{

    const {
        handleSubmit,
        register,
        reset,
        control,
        formState: {errors},
    } = useForm<Category>();

    const submitForm = (data: Category) =>
    {
        mutateAddCategory(data);
    };

    const queryClient = useQueryClient();

    const {
        data: categories,
        isLoading,
    } = useQuery("categories", getCategories);

    const {
        mutate: mutateAddCategory,
        isLoading: isLoadingAddCategory,
    } = useMutation(createCategory, {
        onSuccess: () =>
        {
            queryClient.invalidateQueries("categories");
            reset({
                name: "",
            });
        },
    });

    const {
        mutate: mutateDeleteCategory,
        isLoading: isLoadingDeleteCategory,
    } = useMutation(deleteCategory, {
        onSuccess: () =>
        {
            queryClient.invalidateQueries("categories");
        },
    });

    return (
        <>
            <div className="mb-16 text-center">
                <div className="p-8">
                    <H2 className="mb-8 text-secondary">Categories</H2>

                    <Box className={"p-8 mb-16"}>
                        <form onSubmit={handleSubmit(submitForm)}>
                            <div
                                className="grid items-center justify-start gap-x-20 gap-y-1 grid-cols-1 md:grid-cols-2">
                                <Input
                                    name="Name"
                                    control={control}
                                    defaultValue={""}
                                    label="Category Name"
                                    errors={!!errors.name}
                                    errorMessage={errors.name?.message}
                                />

                                <Button
                                    variant={"contained"}
                                    disabled={isLoadingAddCategory}
                                    type="submit"
                                >
                                    {!isLoadingAddCategory && "Add"}
                                    {isLoadingAddCategory &&
                                        <CircularProgress/>}
                                </Button>
                            </div>
                        </form>
                    </Box>

                    <div className="grid gap-x-20 gap-y-1 grid-cols-1 md:grid-cols-4">
                        {categories?.map((category) => (
                            <Box className="p-8" key={category.id}>
                                <H3>{category.name}</H3>

                                <div className={"mt-4"}>
                                    <Button
                                        variant="contained"
                                        onClick={() => mutateDeleteCategory(category.id)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </Box>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default Categories;
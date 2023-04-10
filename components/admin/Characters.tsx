import React from "react";
import H2 from "@/components/general/H2";
import Box from "@/components/general/Box";
import {Controller, useForm} from "react-hook-form";
import {Character} from "@/types/Character";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {createCategory, createCharacter, deleteCharacter, getCategories, getCharacters} from "@/requests/admin";
import Input from "@/components/general/Input";
import {
    Accordion, AccordionDetails, AccordionSummary,
    Button,
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Skeleton,
    TextField,
} from "@mui/material";
import {Category} from "@/types/Category";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import H3 from "@/components/general/H3";

type Props = {};

const Characters = (
    {}: Props): JSX.Element =>
{

    const {
        handleSubmit,
        register,
        reset,
        control,
        formState: {errors},
    } = useForm<Character>();

    const submitForm = (data: Character) =>
    {
        mutateAddCharacter(data);
    };


    const queryClient = useQueryClient();

    const {
        data: categoriesWithChars,
        isLoading,
    } = useQuery("characters", getCharacters);

    const {
        data: categories,
        isLoading: isLoadingCategories,
    } = useQuery("categories", getCategories);

    const {
        mutate: mutateAddCharacter,
        isLoading: isLoadingAddCharacter,
    } = useMutation(createCharacter, {
        onSuccess: () =>
        {
            queryClient.invalidateQueries("characters");
            reset({
                name: "",
            });
        },
    });

    const {
        mutate: mutateDeleteCharacter,
        isLoading: isLoadingDeleteCharacter,
    } = useMutation(deleteCharacter, {
        onSuccess: () =>
        {
            queryClient.invalidateQueries("characters");
        },
    });


    return (
        <div className="mb-16 text-center">
            <div className="p-8">
                <H2 className="mb-8 text-secondary">Characters</H2>

                <Box className={"p-8 mb-16"}>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div
                            className="grid items-center justify-start gap-x-20 gap-y-1 grid-cols-1 md:grid-cols-3">
                            <Input
                                name="name"
                                control={control}
                                defaultValue={""}
                                label="Character Name"
                                errors={!!errors.name}
                                errorMessage={errors.name?.message}
                            />

                            <div>
                                <Controller
                                    name={"categoryId"}
                                    control={control}
                                    defaultValue={""}
                                    render={({field}) =>
                                        <FormControl
                                            variant="standard"
                                            fullWidth
                                        >
                                            <InputLabel id="category-label">Category</InputLabel>
                                            <Select
                                                {...field}
                                                labelId={"category-label"}
                                                label={"Category"}
                                                variant="standard"
                                                error={!!errors.name}
                                                defaultValue={""}
                                            >
                                                <MenuItem
                                                    value={""}
                                                    disabled
                                                >
                                                    Select Category
                                                </MenuItem>

                                                {categories?.map((category) =>
                                                    <MenuItem
                                                        key={category.id}
                                                        value={category.id}
                                                    >
                                                        {category.name}
                                                    </MenuItem>,
                                                )}
                                            </Select>
                                        </FormControl>
                                    }
                                />
                            </div>

                            <Button
                                variant={"contained"}
                                disabled={isLoadingAddCharacter}
                                type="submit"
                            >
                                {!isLoadingAddCharacter && "Add"}
                                {isLoadingAddCharacter &&
                                    <CircularProgress/>}
                            </Button>
                        </div>
                    </form>
                </Box>

                <div className="grid gap-x-20 gap-y-1 grid-cols-1 md:grid-cols-4">
                    {isLoading &&
                        Array(10).map((i) => (
                            <Box className="p-8" key={i}>
                                <Skeleton animation="wave"/>
                                <Skeleton animation="wave"/>
                                <Skeleton animation="wave"/>
                                <Skeleton animation="wave"/>
                            </Box>
                        ))
                    }
                </div>

                {categoriesWithChars?.map((category) =>
                    <Accordion key={category.id} className={"mb-5"}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"

                        >
                            {category.name} - {category.characters?.length}
                        </AccordionSummary>

                        <AccordionDetails>
                            <div className="grid gap-x-20 gap-y-1 grid-cols-1 md:grid-cols-4">

                                {category?.characters?.map((character) => (
                                    <Box className="p-8 shadow border-primary border-2" key={character.id}>
                                        <H3>{character.name}</H3>

                                        <div className={"mt-4"}>
                                            <Button
                                                variant="contained"
                                                onClick={() => mutateDeleteCharacter(character.id as string)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </Box>
                                ))}
                            </div>
                        </AccordionDetails>
                    </Accordion>,
                )}

            </div>
        </div>
    );
};

export default Characters;
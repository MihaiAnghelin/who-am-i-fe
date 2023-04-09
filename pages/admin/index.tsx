import React, {useEffect} from 'react';
import H1 from "@/components/general/H1";
import Categories from "@/components/admin/Categories";
import Characters from "@/components/admin/Characters";
import {Divider} from "@mui/material";
import {useAuth} from "@/hooks/useAuth";

const AdminPage = () =>
{
    // useAuth();

    return (
        <div>
            <H1 className={"text-center text-secondary m-16"}>Admin Page</H1>

            <Divider/>

            <Categories/>

            <Divider/>

            <Characters/>
        </div>
    );
};

export default AdminPage;


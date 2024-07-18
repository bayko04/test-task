"use client";

import Card from "@/components/Card/Card";
import CreateModal from "@/components/CreateModal/CreateModal";
import Outputs from "@/components/Outputs/Outputs";
import Panel from "@/components/Panel/Panel";
import Search from "@/components/Search/Search";
import TableItem from "@/components/TableItem/TableItem";
import Sidebar from "@/components/layouts/sidebar";
import { setTablet } from "@/store/reducers/ProductsSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const page = () => {
  const { tablet, createModal } = useSelector((state: any) => state.products);
  // const dispatch = useDispatch<any>();

  // const handleOutput = (type: boolean) => {
  //   dispatch(setTablet(type));
  // };

  return (
    <div className="">
      <div className="container">
        <Panel />

        {tablet && <TableItem />}
        {!tablet && <Card />}
        {createModal && <CreateModal />}
      </div>
    </div>
  );
};

export default page;

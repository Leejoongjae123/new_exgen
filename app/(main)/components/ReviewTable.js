"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link
} from "@nextui-org/react";

export default function ReviewTable() {
  return (
    <>
      <section class="bg-white dark:bg-gray-900 my-5">
        <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-12">
          <Link href="https://www.naver.com" target="_blank">
            <h1 class="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white">
              Postings
            </h1>
          </Link>
        </div>
      </section>
      <Table
        isStriped
        className="my-5"
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

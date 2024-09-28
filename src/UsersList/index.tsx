import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Sheet,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Input } from "@/components/ui/input"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { useState } from "react"

import { useGetUsersQuery, useSearchUsersQuery } from "@/store/userData/users"
import { LoadingHeader, LoadingTableRow } from "./Loading"
import UserDetails from "./UserDetails"
import { Button } from "@/components/ui/button"


const UsersList = () => {
    const [inputValue, setInputValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const { data: userData, error, isLoading } = searchValue ? useSearchUsersQuery(searchValue) : useGetUsersQuery("api");
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setSearchValue(inputValue);
    }

    if (error)
        return <h1>Something went wrong</h1>

    return (
        <>
            <Card className="w-100">
                <CardHeader>
                    {
                        isLoading
                            ? <LoadingHeader />
                            : <>
                                <CardTitle>{userData?.users?.length}</CardTitle>
                                <CardDescription>Total users found</CardDescription>
                            </>
                    }
                </CardHeader>
                <CardContent className="grid gap-4">
                    <form onSubmit={handleSubmit}>
                        <div className="flex w-full items-center space-x-2">
                            <Input placeholder="Search user" onChange={handleInputChange} />
                            <Button type="submit">Search</Button>
                        </div>
                    </form>

                    <Sheet>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>First Name</TableHead>
                                    <TableHead>Last Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Phone</TableHead>
                                    <TableHead>Company name</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    isLoading && <LoadingTableRow />
                                }
                                {userData?.users?.map((obj: any, i: number) => {
                                    return (
                                        <SheetTrigger key={`key-${i}`} asChild>
                                            <TableRow className="cursor-pointer"
                                                onClick={() => setSelectedIndex(i)}
                                            >
                                                <TableCell>{obj?.firstName}</TableCell>
                                                <TableCell>{obj?.lastName}</TableCell>
                                                <TableCell>{obj?.email}</TableCell>
                                                <TableCell>{obj?.phone}</TableCell>
                                                <TableCell>{obj?.company?.name}</TableCell>
                                            </TableRow>
                                        </SheetTrigger>
                                    )
                                })}
                            </TableBody>
                        </Table>

                        <UserDetails users={userData?.users} index={selectedIndex} />
                    </Sheet>
                </CardContent>
            </Card>
        </>
    )
};

export default UsersList;
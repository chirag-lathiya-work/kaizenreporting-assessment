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
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
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
import { useGetUsersQuery } from "@/store/userData/users"
import { LoadingHeader, LoadingTableRow } from "./Loading"
import UserDetails from "./UserDetails"


const UsersList = () => {

    const [inputValue, setInputValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const { data: userData, error, isLoading } = useGetUsersQuery(searchValue);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            //TODO: Implement search feature
            alert('handle search')
        }
    };

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
                    <Input placeholder="Search user" onChange={handleInputChange}
                        onKeyDown={handleKeyDown} />
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
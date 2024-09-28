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


const UsersList = () => {

    const [inputValue, setInputValue] = useState('');

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
                    <CardTitle>200</CardTitle>
                    <CardDescription>Total users found</CardDescription>
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

                                <SheetTrigger asChild>
                                    <TableRow className="cursor-pointer"
                                        onClick={() => {

                                        }}
                                    >
                                        <TableCell>Test First Name 1</TableCell>
                                        <TableCell>Test Last Name 1</TableCell>
                                        <TableCell>Test Email 1</TableCell>
                                        <TableCell>Test Phone 1</TableCell>
                                        <TableCell>Test Company Name 1</TableCell>
                                    </TableRow>
                                </SheetTrigger>
                                <SheetTrigger asChild>
                                    <TableRow className="cursor-pointer"
                                        onClick={() => {

                                        }}
                                    >
                                        <TableCell>Test First Name 2</TableCell>
                                        <TableCell>Test Last Name 2</TableCell>
                                        <TableCell>Test Email 2</TableCell>
                                        <TableCell>Test Phone 2</TableCell>
                                        <TableCell>Test Company Name 2</TableCell>
                                    </TableRow>
                                </SheetTrigger>
                                <SheetTrigger asChild>
                                    <TableRow className="cursor-pointer"
                                        onClick={() => {

                                        }}
                                    >
                                        <TableCell>Test First Name 3</TableCell>
                                        <TableCell>Test Last Name 3</TableCell>
                                        <TableCell>Test Email 3</TableCell>
                                        <TableCell>Test Phone 3</TableCell>
                                        <TableCell>Test Company Name 3</TableCell>
                                    </TableRow>
                                </SheetTrigger>
                                <SheetTrigger asChild>
                                    <TableRow className="cursor-pointer"
                                        onClick={() => {

                                        }}
                                    >
                                        <TableCell>Test First Name 4</TableCell>
                                        <TableCell>Test Last Name 4</TableCell>
                                        <TableCell>Test Email 4</TableCell>
                                        <TableCell>Test Phone 4</TableCell>
                                        <TableCell>Test Company Name 4</TableCell>
                                    </TableRow>
                                </SheetTrigger>
                            </TableBody>
                        </Table>

                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Company Title</SheetTitle>
                                <SheetDescription>
                                    Company Department
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </CardContent>
            </Card>
        </>
    )
};

export default UsersList;
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Users } from "./types";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


type UserDetailsProps = {
    users: Users,
    index: null | number
}

/**
 * @param {UserDetailsProps} props The component accepts users & index
 * @param {Users} props.users can be null or array of users
 * @param {null | number} props.index if user didn't selected any user it will be null else index number
 * @returns {null | JSX.Element}
 */
const UserDetails = ({ users, index }: UserDetailsProps): null | JSX.Element => {

    if (users === null)
        return null

    if (!users?.length)
        return null

    if (index === null)
        return null

    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle>User Details</SheetTitle>
                <SheetDescription>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Details Type</TableHead>
                                <TableHead className="w-[100px]">Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell>{users[index].firstName}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Last Name</TableCell>
                                <TableCell>{users[index].lastName}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Email</TableCell>
                                <TableCell>{users[index].email}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Phone</TableCell>
                                <TableCell>{users[index].phone}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Company name</TableCell>
                                <TableCell>{users[index].company.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Company address</TableCell>
                                <TableCell>{`${users[index].company.address.address}, ${users[index].company.address.city}, ${users[index].company.address.stateCode} ${users[index].company.address.postalCode}`}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Company department</TableCell>
                                <TableCell>{`${users[index].company.department}`}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Company title</TableCell>
                                <TableCell>{`${users[index].company.title}`}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    )
};

export default UserDetails;
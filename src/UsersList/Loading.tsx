import { Skeleton } from "@/components/ui/skeleton"
import { TableCell, TableRow } from "@/components/ui/table"

export const LoadingHeader = () => {
    return (
        <div className="">
            <Skeleton className="h-4 w-12 rounded-full" />
            <div className="mt-2">
                <Skeleton className="h-4 w-[250px]" />
            </div>
        </div>
    )
}

export const LoadingTableRow = () => {
    return (
        <>
            <TableRow className="cursor-pointer">
                <TableCell>
                    <Skeleton className="h-4 w-full my-3" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-full my-3" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-full my-3" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-full my-3" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-full my-3" />
                </TableCell>
            </TableRow>
            <TableRow className="cursor-pointer">
                <TableCell>
                    <Skeleton className="h-4 w-full my-3" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-full my-3" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-full my-3" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-full my-3" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-full my-3" />
                </TableCell>
            </TableRow>
        </>
    )
}
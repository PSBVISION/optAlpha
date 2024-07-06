import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { transactions } from "../constants/index"


const Transactions = () => {
  return (
    <div className="w-full flex justify-center items-center">
    <div className="w-6/12 ">
    <Table className="bg-white">
  <TableCaption>A list of transition of Customers.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Customer</TableHead>
      <TableHead className="text-center">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {transactions.map((item) => (
    <TableRow key={item.id}>
      <TableCell className="font-medium w-56">{item.customer}</TableCell>
      <TableCell className="text-center">{item.amount}</TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>
</div>
</div>
  )
}

export default Transactions
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
    <Table className="bg-white ">
  <TableCaption>A list of transition of Customers.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Customer</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {transactions.map((item) => (
    <TableRow key={item.id}>
      <TableCell className="font-medium">{item.customer}</TableCell>
      <TableCell className="text-right">{item.amount}</TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>

  )
}

export default Transactions
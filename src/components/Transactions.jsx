import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import transactions from "../constants/index"

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
    <TableRow>
    {transactions.map((item) => (
      <TableCell className="font-medium" key={item.id}>{item.cost}</TableCell>
      <TableCell className="text-right"key={item.id}>$250.00</TableCell>
    ))}
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>

  )
}

export default Transactions
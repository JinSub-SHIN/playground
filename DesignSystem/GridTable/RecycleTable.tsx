import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

type TableParams = {
	columns: ColumnsType<any> | undefined
	data: Object[] | undefined
}

/**
 *
 * @param columns Generic is any type interface
 * @param data Object[]
 * @returns
 */
export const RecycleTable = ({ columns, data }: TableParams) => {
	return (
		<Table
			columns={columns}
			pagination={{ position: ['bottomCenter'] }}
			dataSource={data}
		/>
	)
}

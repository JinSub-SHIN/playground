import styled from 'styled-components'
import { HeaderItem } from 'types/Layouts'
import ContentLayout from 'components/common-components/Layouts/ContentLayout'
import { Grid, GridTable } from 'components/common-components/Tables/GridTable'
import { Input, Select } from 'antd'

/**
 * key value Title
 * Grid, colGroup Length 가 동일 해야함.
 */
export interface TitleType {
	[key: number]: HeaderLang[]
}

/**
 * 한글명: Title & 영문명: Form.Item
 */
export interface HeaderLang {
	kr: string
	en: string
}

/**
 *  Return JSX.Element[]
 */
export interface ColumnType {
	[key: number]: JSX.Element[]
}

export const TestGridTable = () => {
	const contentMenuItem: HeaderItem = {
		title: '정보관리',
		subtitle: '회원 목록',
	}

	const test: Grid = {
		rowCount: 3,
		colGroup: [
			{
				key: 1,
				colGroupCount: 2,
			},
			{
				key: 2,
				colGroupCount: 2,
			},
			{
				key: 3,
				colGroupCount: 2,
			},
			{
				key: 4,
				colGroupCount: 1,
			},
			{
				key: 5,
				colGroupCount: 2,
			},
			{
				key: 6,
				colGroupCount: 1,
			},
		],
	}

	const test2: Grid = {
		rowCount: 5,
		colGroup: [
			{
				key: 1,
				colGroupCount: 2,
			},
			{
				key: 2,
				colGroupCount: 1,
			},
		],
	}

	const headerData: TitleType = {
		1: [
			{
				kr: '디바이스',
				en: 'device',
			},
			{
				kr: 'ID',
				en: 'ID',
			},
		],
		2: [
			{
				kr: '기업명',
				en: 'companyName',
			},
			// {
			// 	kr: '본부명',
			// 	en: 'bonbu',
			// },
		],
		// 3: [
		// 	{
		// 		kr: '지사명',
		// 		en: 'jusa',
		// 	},
		// 	{
		// 		kr: '이름',
		// 		en: 'name',
		// 	},
		// ],
		// 4: [
		// 	{
		// 		kr: '4번타이틀',
		// 		en: '4title',
		// 	},
		// ],
		// 5: [
		// 	{
		// 		kr: '5번타이틀',
		// 		en: '5title',
		// 	},
		// 	{
		// 		kr: '5번타이틀2',
		// 		en: '5title2',
		// 	},
		// ],
		// 6: [
		// 	{
		// 		kr: '6번타이틀',
		// 		en: '6title',
		// 	},
		// ],
	}

	const { Option } = Select

	const onChange = (value: string) => {
		console.log(value)
	}

	const initialValues = {
		device: '50',
	}

	const SpanElement: JSX.Element = (
		<Select style={{ width: 80, margin: '0 8px' }} onChange={onChange}>
			<Option value="rmb">RMB</Option>
			<Option value="dollar">Dollar</Option>
		</Select>
	)
	const InputElement: JSX.Element = <Input placeholder="input"></Input>

	const ColumnElement: ColumnType = {
		1: [SpanElement, SpanElement],
		2: [SpanElement, SpanElement],
		3: [SpanElement, SpanElement],
		4: [SpanElement, SpanElement],
		5: [SpanElement, SpanElement],
		6: [InputElement, SpanElement],
	}

	return (
		<ContentLayout headerItem={contentMenuItem}>
			<GridTable
				gridObj={test2}
				titleArray={headerData}
				element={ColumnElement}
				initialValues={initialValues}
			/>
		</ContentLayout>
	)
}

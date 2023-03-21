import styled from 'styled-components'
import { Col, Row } from 'antd'
import { ColumnType, TitleType } from 'pages/browser/information/TestGridTable'
import { Button, Form, Select } from 'antd'
import { Store } from 'antd/es/form/interface'

export interface Grid {
	rowCount: number
	colGroup: ColGroup[]
}

export interface ColGroup {
	key: number
	colGroupCount: number
}

const TableColumn = styled.div`
	width: 100%;
	height: 72px;
	background-color: #ffffff;
	float: left;
`

const TableBox = styled.div`
	border-top: 0.5px solid #939dad;
	border-bottom: 0.5px solid #939dad;
`

const StyledRow = styled(Row)`
	border-bottom: 0.5px solid #d9d9d9;
`

const HeaderCol = styled(Col)`
	height: 72px;
	background-color: #f4f6f9;
	display: table;
	text-align: center;
`

const ContentCol = styled(Col)`
	height: 72px;
	background-color: #ffffff;
	margin-left: 10px;
	display: table;
`

const Title = styled.span`
	font-size: 16px;
	font-weight: 600;
	display: table-cell;
	vertical-align: middle;
`

const Content = styled.span`
	font-size: 16px;
	font-weight: 300;
`

const onFinish = (values: any) => {
	console.log('Success:', values)
}

const { Option } = Select

const onChange = (value: string) => {
	console.log(value)
}

/**
 * 테이블 자동 생성기
 * @param gridObj Grid객체(rowCount: number , colGroup: colgroup[])
 * @param titleArray 테이블 Header 정보 데이터
 * @warnning 테이블 정보대로 파라미터를 전부 맞춰서 보내줘야함
 * @returns
 */
export const GridTable = (params: {
	gridObj: Grid
	titleArray: TitleType
	element: ColumnType
	initialValues?: Store | undefined
}) => {
	return (
		<>
			<Form onFinish={onFinish} initialValues={params.initialValues}>
				<TableBox>
					{params.gridObj.colGroup.map((item, _) =>
						item.colGroupCount == 1 ? (
							<StyledRow key={item.key}>
								<HeaderCol flex="154px">
									<Title>{params.titleArray[item.key][0].kr}</Title>
								</HeaderCol>
								<ContentCol flex="auto">
									<Form.Item name={params.titleArray[item.key][0].en}>
										{params.element[item.key][0]}
									</Form.Item>
								</ContentCol>
							</StyledRow>
						) : (
							<StyledRow key={item.key}>
								<HeaderCol flex="154px">
									<Title>{params.titleArray[item.key][0].kr}</Title>
								</HeaderCol>
								<ContentCol flex="auto">
									<Form.Item name={params.titleArray[item.key][0].en}>
										{params.element[item.key][0]}
									</Form.Item>
								</ContentCol>
								<HeaderCol flex="154px">
									<Title>{params.titleArray[item.key][1].kr}</Title>
								</HeaderCol>
								<ContentCol flex="auto">
									<Form.Item name={params.titleArray[item.key][1].en}>
										{params.element[item.key][1]}
									</Form.Item>
								</ContentCol>
							</StyledRow>
						),
					)}
				</TableBox>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

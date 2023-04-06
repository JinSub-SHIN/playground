import styled from 'styled-components'
import { Col, Row } from 'antd'
import { ColumnType, TitleType } from 'pages/browser/information/TestGridTable'
import { Form, Select } from 'antd'
import { Store } from 'antd/es/form/interface'
import { CustomButton } from '../Button/CustomButton'

export interface Grid {
	rowCount: number
	colGroup: ColGroup[]
}

export interface ColGroup {
	key: number
	colGroupCount: number
}

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
	width: 35%;
	height: 72px;
	background-color: #ffffff;
	margin-left: 10px;
	padding-top: 19px;
`

const Title = styled.span`
	font-size: 16px;
	font-weight: 600;
	display: table-cell;
	vertical-align: middle;
`

/**
 * Row 당 Col 최대 2개 테이블 자동 생성기
 * @param gridObj Grid객체(rowCount: number , colGroup: colgroup[])
 * @param titleArray 테이블 Header 정보 데이터
 * @check 테이블 정보대로 파라미터를 전부 맞춰서 보내줘야함
 * @returns
 */
export const GridTable = (params: {
	gridObj: Grid
	titleArray: TitleType
	element: ColumnType
	initialValues?: Store | undefined
}) => {
	const onFinish = (values: any) => {
		console.log('Success:', values)
	}

	return (
		<>
			<Form onFinish={onFinish} initialValues={params.initialValues}>
				<TableBox>
					{params.gridObj.colGroup.map((item, _) =>
						item.colGroupCount == 1 ? (
							<StyledRow key={item.key}>
								<HeaderCol flex="10%">
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
								<HeaderCol flex="10%">
									<Title>{params.titleArray[item.key][0].kr}</Title>
								</HeaderCol>
								<ContentCol flex="40%">
									<Form.Item name={params.titleArray[item.key][0].en}>
										{params.element[item.key][0]}
									</Form.Item>
								</ContentCol>
								<HeaderCol flex="10%">
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
					{/* <CustomButton type="primaryButton" htmlType="submit" title={'저장'} /> */}
				</Form.Item>
			</Form>
		</>
	)
}

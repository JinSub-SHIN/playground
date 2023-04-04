import { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/reducer/rootReducer'
import { SearchOutlined } from '@ant-design/icons'
import { Col, Input, Row, Form } from 'antd'
import { getSearchData } from 'api/axios/search/service'
import { CustomButton } from '../Button/CustomButton'

export interface SearchParam {
	whereToSearch: string
	searchData: string
}

const StyledRow = styled(Row)``

const HeaderCol = styled(Col)`
	margin-left: 10px;
`

const SearchData = () => {
	const whereToSearch = useSelector((state: RootState) => state.search)
	const onFinish = (values: SearchParam) => {
		const params: SearchParam = {
			whereToSearch: whereToSearch.where,
			searchData: values.searchData,
		}

		const response = getSearchData(params)
		response.then(res => console.log(res))
	}

	return (
		<>
			<Form onFinish={onFinish}>
				<StyledRow>
					<HeaderCol flex="auto">
						<Form.Item name="searchData">
							<Input placeholder="" prefix={<SearchOutlined />} />
						</Form.Item>
					</HeaderCol>
					<HeaderCol flex="90px">
						<Form.Item>
							<CustomButton type="blueButton" htmlType="submit" title="검색" />
						</Form.Item>
					</HeaderCol>
				</StyledRow>
			</Form>
		</>
	)
}

export default SearchData

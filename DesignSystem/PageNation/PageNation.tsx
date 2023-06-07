import { useEffect, useState } from 'react'
import styled from 'styled-components'

const PagingDiv = styled.div`
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	gap: 15px;
	display: flex;
	margin-top: 50px;
	width: 100%;
	justify-content: center;
`

const NumberDiv = styled.div`
	min-width: 400px;
	display: flex;
	gap: 15px;
	justify-content: center;
`

const CurrentDiv = styled.div`
	width: 20px;
	font-weight: 700;
	text-decoration: underline;
`

const DefaultDiv = styled.div`
	width: 20px;
`

const PageNation = (params: { pageSize: number }) => {
	// 현재 위치중인 페이지
	const [currentPage, setCurrentPage] = useState<number>(1)
	// firstPage 값은 제일 앞의 값을 뜻함
	// 1, 11, 21 ....
	const [firstPage, setFirstPage] = useState<number>(1)
	// 화면에 렌더링 될 페이지 번호 리스트
	const [pageSize, setPageSize] = useState<number[]>([])

	useEffect(() => {
		// 배열만들고 현재 사용자의 페이지에 따라 배열 수정
		const keyboard = Array.from(
			{ length: params.pageSize },
			(_, index) => index + 1,
		)
		//기존 배열의 불변성은 유지시킬 것
		const copyArray = [...keyboard]
		const filterArray = copyArray.filter((value, index, arr) => {
			return value > firstPage - 1 && value < firstPage + 10
		})

		setPageSize(filterArray)
	}, [firstPage])

	const handleNextPage = () => {
		const nextNumber = firstPage + 10
		if (nextNumber > params.pageSize) {
			return
		}
		setFirstPage(nextNumber)
	}

	const handleFrontPage = () => {
		const nextNumber = firstPage - 10
		if (nextNumber < 0) {
			return
		}
		setFirstPage(nextNumber)
	}

	const handlePageChange = (index: number) => {
		setCurrentPage(index)
	}

	return (
		<>
			<PagingDiv>
				<DefaultDiv onClick={handleFrontPage}>{'<'}</DefaultDiv>
				<NumberDiv>
					{pageSize.map((item, index) => {
						if (item == currentPage) {
							return <CurrentDiv key={index}>{item}</CurrentDiv>
						} else {
							return (
								<DefaultDiv key={index} onClick={() => handlePageChange(item)}>
									{item}
								</DefaultDiv>
							)
						}
					})}
				</NumberDiv>
				<DefaultDiv onClick={handleNextPage}>{'>'}</DefaultDiv>
			</PagingDiv>
		</>
	)
}

export default PageNation

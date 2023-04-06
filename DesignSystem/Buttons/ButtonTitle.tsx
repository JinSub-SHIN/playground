import {
	CheckOutlined,
	DeleteOutlined,
	DownloadOutlined,
	EditOutlined,
	PlusOutlined,
	PrinterOutlined,
	SearchOutlined,
	ShareAltOutlined,
	StarFilled,
} from '@ant-design/icons'
import { MovieIcon } from 'images/icon/MovieIcon'
import styled from 'styled-components'

const ButtonContent = styled.span`
	margin-left: 5px;
	font-size: 15px;
`

const switchingIcon = (title: string) => {
	switch (title) {
		case '검색':
			return (
				<>
					<SearchOutlined />
				</>
			)
		case '등록':
			return (
				<>
					<PlusOutlined />
				</>
			)
		case '승인하기':
			return (
				<>
					<CheckOutlined />
				</>
			)
		case '확인':
			return (
				<>
					<CheckOutlined />
				</>
			)
		case '점검보고서 출력':
			return (
				<>
					<PrinterOutlined />
				</>
			)
		case '다운로드':
			return (
				<>
					<DownloadOutlined />
				</>
			)
		case '공유':
			return (
				<>
					<ShareAltOutlined />
				</>
			)
		case '수정':
			return (
				<>
					<EditOutlined />
				</>
			)
		case '삭제':
			return (
				<>
					<DeleteOutlined />
				</>
			)
		case '즐겨찾기':
			return (
				<>
					<StarFilled />
				</>
			)
		case '영화관 모드':
			return (
				<>
					<MovieIcon />
				</>
			)

		default:
			break
	}
}

export const ButtonTitle = (params: { title: string }) => {
	return (
		<>
			{switchingIcon(params.title)}
			<ButtonContent>{params.title}</ButtonContent>
		</>
	)
}

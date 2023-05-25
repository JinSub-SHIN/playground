import { PlusOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import CustomUploadButton from '../Button/CustomUploadButton'
import styled from 'styled-components'
import CustomInput from '../Inputs/CustomInput'
import { useState } from 'react'

const AvatarWrapper = styled.div`
	display: flex;
	gap: 10px;
`

/**
 * 아바타 사진 with File Input
 * @returns JSX.Element
 */
export const CustomAvatar = () => {
	const [fileName, setFileName] = useState<string | undefined>(undefined)
	const [thumbnail, setThumbnail] = useState('')

	const getAvatarFile = (file?: File, fileName?: string) => {
		setFileName(fileName)
		const reader = new FileReader()
		reader.onload = function (event: ProgressEvent<FileReader>) {
			const img = new Image()
			img.onload = function () {
				const canvas = document.createElement('canvas')
				const ctx = canvas.getContext('2d')
				canvas.width = 40
				canvas.height = 40
				ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
				const thumbnail = canvas.toDataURL()
				setThumbnail(thumbnail)
			}
			img.src = event.target?.result as string
		}
		reader.readAsDataURL(file!)
	}
	return (
		<AvatarWrapper>
			<Avatar src={thumbnail} size={40} icon={<UserOutlined />} />
			{fileName == undefined ? (
				<CustomInput
					placeholder="선택된 파일 없음"
					size="medium"
					disabled={true}
				/>
			) : (
				<CustomInput
					placeholder=""
					size="medium"
					disabled={true}
					value={fileName}
				/>
			)}
			<CustomUploadButton
				title={
					<>
						<PlusOutlined />
						<span> 파일선택</span>
					</>
				}
				getFileInfo={getAvatarFile}
			/>
		</AvatarWrapper>
	)
}

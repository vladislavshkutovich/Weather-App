import styled from 'styled-components'

export const StyledWeatherWeeklyItem = styled.div`
	height: 100%;
	width: 16%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	box-shadow: ${({ theme }) => theme.boxShadows[1]};
	padding: ${({ theme }) => theme.paddings[3]}rem;
`

export const StyledDay = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.regular}rem;
	padding: ${({ theme }) => theme.paddings[1]}rem
		${({ theme }) => theme.paddings[3]}rem;
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 1rem;
`

export const StyledIcon = styled.img`
	justify-self: center;
	background-color: ${({ theme }) =>
		theme.colors.background};
	border-radius: 2rem;
	height: 40%;
	max-height: 8rem;
	width: 80%;
	max-width: 8rem;
`

export const StyledTemperature = styled.p`
	font-size: ${({ theme }) =>
		theme.fontSizes.temperatureWeekly}rem;
`
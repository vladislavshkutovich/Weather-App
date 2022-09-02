import styled from 'styled-components'

export const StyledWeatherToday = styled.div`
	grid-row: weather-start / weather-end;
	grid-column: today-start / today-end;

	display: grid;
	grid-template-rows: 1.25fr [icon-start today-start] 1.5fr [today-end] 0.25fr [temperature-start] 2fr [temperature-end icon-end] 1.5fr;
	grid-template-columns: 0.25fr [icon-start] 2fr [icon-end] 0.2fr [temperature-start] 2fr [temperature-end] 0.25fr;
	justify-items: center;
	box-shadow: ${({ theme }) => theme.boxShadows[1]};
`

export const StyledIcon = styled.img`
	grid-row: icon-start / icon-end;
	grid-column: icon-start / icon-end;
	align-self: center;
	justify-self: end;
	background-size: cover;

	min-width: 5rem;
	width: 100%;
	max-width: 13rem;
	border-radius: 2rem;
`

export const StyledToday = styled.p`
	grid-row: today-start / today-end;
	grid-column: temperature-start / temperature-end;
	align-self: flex-end;
	font-size: ${({ theme }) => theme.fontSizes.large}rem;
	padding: ${({ theme }) => theme.paddings[2]}rem;
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 1rem;

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.medium}) {
		font-size: ${({ theme }) => theme.fontSizes.regular}rem;
	}

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.xs}) {
		padding: ${({ theme }) => theme.paddings[1]}rem;
	}
`

export const StyledTemperature = styled.p`
	grid-row: temperature-start / temperature-end;
	grid-column: temperature-start / temperature-end;
	align-self: flex-start;
	font-size: ${({ theme }) =>
		theme.fontSizes.temperature}rem;

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.large}) {
		font-size: ${({ theme }) => theme.fontSizes.xlarge}rem;
	}

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.medium}) {
		font-size: ${({ theme }) =>
			theme.fontSizes.temperatureWeekly}rem;
	}
`

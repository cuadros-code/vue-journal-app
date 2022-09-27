
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

export const getDayMonthYear = (dateStr) => {
  const date = new Date(dateStr)

  return {
    day: date.getDate(),
    dayOfWeek: days[date.getDay()],
    month: months[date.getMonth()],
    year: date.getFullYear()
  }
}
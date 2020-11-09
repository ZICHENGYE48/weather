import get from '../../utils/OpenWeatherMap';

const getWeathers = (ids)=> get('/group',{
    id: ids.join(),
});


export default getWeathers;
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const BarCharts = ({ ratings = [] }) => {
  return (
    <div className='mt-8'>
      <h2 className='font-semibold text-2xl mb-4'>Ratings</h2>

      <div className='w-full h-64'>
        <div className='w-full h-64'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart
              data={[...ratings].reverse()}
              layout='vertical'
              margin={{ top: 5, right: 10, left: 0, bottom: 20 }}
            >
              <CartesianGrid horizontal={false} strokeDasharray='3 3' />
              <XAxis
                type='number'
                domain={[0, 'datamax']}
                tickCount={5}
                tick={{ fontSize: 10 }}
              />
              <YAxis
                type='category'
                dataKey='name'
                width={60}
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Bar
                dataKey='count'
                barSize={18}
                radius={[0, 3, 3, 0]}
                fill='#eaa91b'
                background={{ radius: 3 }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default BarCharts;

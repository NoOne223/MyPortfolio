import React from 'react'
import projectsDetail from "@/public/example_data/projects_data"
import Link from 'next/link'

const Experience = () => {
  return (
    <section className='mt-16 bg-secondary' id='experience'>
      <div className='container mx-auto p-3'>
        <h2 className="font-bold lg:text-7xl sm:text-5xl text-center uppercase my-6 text-white">Kinh nghiệm làm việc</h2>
        <div className='text-white'>
            <h4 className='font-bold text-4xl'>Tôi có 1 năm kinh nghiệm tại DFM</h4>
            <p className='text-sm mb-6'>Tháng 2/2024 - Tháng 4/2025</p>
            <p className='mb-6'>
                Trong khoảng thời gian làm việc ở đây tôi đã đúc kết được nhiều kinh nghiệm và kiến thức, không chỉ các kiến thức chuyên môn mà còn cách quản lí mã nguồn cùng với cách phối hợp với đội ngũ Backend để hoàn thiện một dự án. Sau này là một số dự án mà
                tôi đã tham gia.
            </p>
            <h4 className='font-bold text-4xl mb-6'>Các dự án tham khảo</h4>
            <div className='sm:overflow-scroll xl:overflow-hidden w-full'>
              <table className='w-full mb-6'>
              <thead>
                <tr>
                  <th className='border border-white py-2'>Tên dự án</th>
                  <th className='border border-white py-2'>Vai trò</th>
                  <th className='border border-white py-2'>Công việc chính</th>
                  <th className='border border-white py-2'>Công nghệ sử dụng</th>
                  <th className='border border-white py-2'>Link tham khảo</th>
                </tr>
              </thead>
              <tbody>
              {projectsDetail.map((category) => (
                <tr key={category.id}>
                  <td className='border border-white p-2'>{category.project_name}</td>
                  <td className='border border-white p-2'>{category.project_role}</td>
                  <td className='border border-white p-2 min-w-[500px]'>{category.prject_job}</td>
                  <td className='border border-white p-2'>{category.project_tech}</td>
                  <td className='border border-white p-2'><Link href={category.project_link} target='blank'>{category.project_link}</Link></td>
                </tr>
              ))}
              </tbody>
            </table>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Experience

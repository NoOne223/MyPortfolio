import { faBookOpen, faCakeCandles, faCode, faHeadphones, faLanguage, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Infomation = () => {
  return (
    <section  id='infomation' className='bg-primary min-h-screen flex flex-col items-center justify-center'>
      <div className='container mx-auto p-3 mt-20'>
        <div className='text-center'>
            <p className='text-4xl font-bold italic mb-6'>Frontend</p>
            <h1 className='lg:text-7xl sm:text-5xl font-bold uppercase mb-6'>Lê Hoàng Nam</h1>
            <ul className='flex items-center justify-center gap-10 mb-6'>
              <li>
                <p><FontAwesomeIcon icon={faCakeCandles} /> 03-09-2001</p>
              </li>
              <li>
                <p><FontAwesomeIcon icon={faLocationDot} /> Ho Chi Minh, Viet Nam</p>
              </li>
            </ul>
            <p className='mb-6'>
              Tôi là một người tích cực, thích làm việc trong môi trường sáng tạo và thân thiện. Tôi dành phần lớn thời gian để học các công nghệ mới và khám phá những cách làm việc hiệu quả hơn. Tôi cũng quan tâm đến việc học các ngôn ngữ mới. 
              Tôi luôn mong muốn phát triển bản thân, cải thiện kỹ năng và đóng góp vào sự thành công của cả nhóm.
            </p>
        </div>
        <div className='md:flex gap-x-5'>
            <div className='md:w-1/3 p-3'>
              <h4 className='font-bold text-4xl mb-6'>Châm ngôn yêu thích</h4>
              <p className='italic'>
                &quot;Một nụ cười có thể thay cách nhìn một con người, một cái ôm có thể có một thay lời cảm thông, một lời nói có thể cứu vãn cả một người.&quot;
              </p>
            </div>
            <div className='md:w-1/3 p-3'>
              <h4 className='font-bold text-4xl mb-6'>Sở thích</h4>
              <ul className='grid md:grid-cols-2 sm:grid-cols-1 gap-y-6'>
                <li>
                  <p>
                    <FontAwesomeIcon className='me-2' icon={faHeadphones} />
                    Nghe nhạc
                  </p>
                </li>
                <li>
                  <p>
                    <FontAwesomeIcon className='me-2' icon={faBookOpen} />
                    Đọc truyện
                  </p>
                </li>
                <li>
                  <p>
                    <FontAwesomeIcon className='me-2' icon={faLanguage} />
                    Học thêm ngôn ngữ
                  </p>
                </li>
                <li>
                  <p>
                    <FontAwesomeIcon className='me-2' icon={faCode} />
                    Tạo template
                  </p>
                </li>
              </ul>
            </div>
            <div className='md:w-1/3 p-3'>
              <h4 className='font-bold text-4xl  mb-6'>Mục tiêu tương lai</h4>
              <p>
               Tôi hướng đến trở thành một lập trình viên FrontEnd thành thạo và cố gắng đạt được vai trò cao hơn đó là Full-stack developer. Không chỉ thế tôi sẽ luyện tập và trau dồi thêm kiến thức về tiếng Nhật cũng như các công nghệ mới để có thể thử làm 
               BrSE.
              </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Infomation

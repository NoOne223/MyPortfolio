import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-16'>
        <div className='container mx-auto p-3'>
            <div className='lg:w-1/2'>
                <h4 className='font-bold text-4xl mb-6'>Lời cảm ơn</h4>
                <p>
                    Em cảm thấy qua các dự án mà em đã từng tham gia khi còn ở công ty cũ nó chưa đủ &quot;Wow&quot;, nhưng em vẫn sẽ cố gắng mỗi ngày để đạt được các mục tiêu mà bản thân đã đặt ra. Em cảm ơn vì đã dành thời gian quan tâm đến hồ sơ cá nhân của em.
                    Chúc một ngày tốt lành và vui vẻ !!!
                </p>
            </div>
        </div>
        <div className='bg-secondary py-2 mt-6'>
            <p className='font-bold text-center text-white'>
                Lê Hoàng Nam - portfolio
            </p>
        </div>
    </footer>
  )
}

export default Footer

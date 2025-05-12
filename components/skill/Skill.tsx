import Image from 'next/image';
import React from 'react';
import technicalSkill from '@/public/example_data/skill_data';

const Skill = () => {
  return (
    <section id="skill" className="mt-16">
      <div className="container mx-auto p-3">
        <h2 className="font-bold lg:text-7xl sm:text-5xl text-center uppercase mb-6">Các kỹ năng</h2>
        <div>
          <h4 className="text-4xl font-bold mb-6">Kỹ năng chuyên môn</h4>
          <div className="flex lg:flex-row sm:flex-col gap-6">
            {technicalSkill.map((category) => (
              <div key={category.id} className="lg:w-1/4 p-3">
                <h5 className="font-bold text-2xl mb-6">{category.name}</h5>
                <ul className="list-disc ps-5">
                  {category.skill.map((skill) => (
                    <li key={skill.id} className="mb-6">
                      <strong>{skill.name}</strong>: {skill.description}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-5">
                  {category.skill.map((skill) =>
                    skill.icon ? (
                      <div key={skill.id} className="bg-primary rounded-sm p-3">
                        <Image
                          src={skill.icon}
                          width={30}
                          height={30}
                          alt={`${skill.name} icon`}
                        />
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            ))}
          </div>
          <h4 className="text-4xl font-bold my-6">Ngoại ngữ</h4>
          <div className='flex lg:flex-row sm:flex-col gap-6'>
            <div className='lg:w-1/2 shadow-2xl rounded-xl p-5'>
              <h5 className='font-bold text-2xl mb-6'>Tiếng Anh</h5>
              <p className='mb-6'>
                Khả năng đọc hiểu và nghe tốt. Có thể làm trong môi trường quốc tế.
              </p>
              <p>
                <strong>Chứng chỉ : </strong> Toeic 755 (Listening: 395, Reading: 360)
              </p>
            </div>
            <div className='lg:w-1/2 shadow-2xl rounded-xl p-5'>
              <h5 className='font-bold text-2xl mb-6'>Tiếng Nhật</h5>
              <p className='mb-6'>
                Thuộc lòng các bảng Hiragana, Katakana. Nghe đọc và viết cơ bản. Vẫn đang trau dồi Kanji.
              </p>
              <p>
                <strong>Chứng chỉ : </strong> Chưa có
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
import Button from '@/components/button';
import Checkbox from '@/components/checkbox';
import Input from '@/components/input';
import CardPaging from '@/components/card-paging';
import Radio from '@/components/radio';
import CustomSelect from '@/components/select';
import { selectOp, testData } from '@/testLoading'; // 화면 로딩용 데이터

import Banner from '@/components/layout/swiper.tsx';
import Accordion from '@/components/layout/accordion';
import ToggleBtn from '@/components/toggle-btn';
import Tag from '@/components/tag';
import TestCard from '@/components/test-card';

export default function DashboardPage() {
  return (
    <main>
      <h1>대시보드</h1>
      <p>여기에 대시보드 내용을 추가하세요.</p>
      <div className="flex-box gap10">
        <Radio id="test01" name="test01" text="테스트1" />
        <Radio id="test02" name="test01" text="테스트2" />
        <Checkbox id="test03" name="test02" text="테스트3" />
        <Checkbox id="test04" name="test02" text="테스트4" />
        <ToggleBtn
          id="test"
          name="test"
          className="chip"
          label={['Chip OFF', 'Chip ON']}
        />
        <CustomSelect options={selectOp} />
      </div>
      <div className="flex-box gap10">
        <Input placeHolder="default Input" />
        <Input placeHolder="className='err'" className="err" />
        <Input placeHolder="className='warn'" className="warn" />
        <Input placeHolder="className='pri'" className="pri" />
        <Input placeHolder="className='sm'" className="sm" />
        <Input placeHolder="className='lg'" className="lg" />
      </div>
      <div className="flex-box gap5">
        <Tag className="com" label="COMPLETED com" />
        <Tag className="err" label="ERROR err" />
        <Tag className="run-b" label="RUNNING run-b" />
        <Tag className="run-g" label="RUNNING run-g" />
        <Tag className="rd" label="READY rd" />
        <Tag className="test" label="TESTING test" />
      </div>
      <div className="flex-box gap5">
        <Button>default button</Button>
        <Button className="sec">sec</Button>
        <Button className="err">err</Button>
        <Button className="warn">warn</Button>
        <Button className="pri">pri</Button>
        <Button className="bdc sec">bdc sec</Button>
        <Button className="bdc err">bdc err</Button>
        <Button className="bdc warn">bdc warn</Button>
        <Button className="bdc pri">bdc pri</Button>
        <Button className="bdc gray">bdc gray</Button>
        <Button className="icon-btn arr sec" />
        <Button className="icon-btn arr err" />
        <Button className="icon-btn arr warn" />
        <Button className="icon-btn arr pri" />
        <Button className="sm">sm button</Button>
        <Button className="lg">lg button</Button>
      </div>
      <Banner />
      <CardPaging />
      <TestCard data={testData} />
      <Accordion
        id={['acc-01', 'acc-02']}
        title={['title1', 'title2']}
        content={[
          <ul key="acc-01" className="acc-con">
            <li>content1-1</li>
            <li>content1-2</li>
          </ul>,
          <ul key="acc-02" className="acc-con">
            <li>content2-1</li>
            <li>content2-2</li>
          </ul>,
        ]}
      />
    </main>
  );
}

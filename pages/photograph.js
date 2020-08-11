import Layout from "../components/layout"

export default function Photograph() {
  return (
      <Layout>
        <h2 className="text-4xl text-gray-900 font-bold leading-normal mb-10">
          Photograph
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img src="/img_01.jpg" alt="" className="w-full mb-2" />
            <div className="text-xs leading-normal">
              <div>July 22, 2020 in Guangzhou, China</div>
              <div>by iPnone 8 Plus</div>
            </div>
          </div>
          <div>
            <img src="/img_02.jpg" alt="" className="w-full mb-2" />
            <div className="text-xs leading-normal">
              <div>October 22, 2020 in Guangzhou, China</div>
              <div>by iPnone 8 Plus</div>
            </div>
          </div>
          <div>
            <img src="/img_03.jpg" alt="" className="w-full mb-2" />
            <div className="text-xs leading-normal">
              <div>April 3, 2020 in Guangzhou, China</div>
              <div>by iPnone 8 Plus</div>
            </div>
          </div>
          <div>
            <img src="/img_04.jpg" alt="" className="w-full mb-2" />
            <div className="text-xs leading-normal">
              <div>October 22, 2020 in QingYuan, China</div>
              <div>by iPnone XR</div>
            </div>
          </div>
          <div>
            <img src="/img_05.jpg" alt="" className="w-full mb-2" />
            <div className="text-xs leading-normal">
              <div>July 12, 2016 in ChenZhou, China</div>
              <div>by iPnone 6 Plus</div>
            </div>
          </div>
          <div>
            <img src="/img_06.jpg" alt="" className="w-full mb-2" />
            <div className="text-xs leading-normal">
              <div>August 2, 2020 in Guangzhou, China</div>
              <div>by iPnone 8 Plus</div>
            </div>
          </div>
        </div>
      </Layout>
  )
}



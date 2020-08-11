import Layout from "../components/layout"
import resourcesData from "./resourcesData"

export default function Resources() {

  return (
      <Layout>
        <h2 className="text-4xl text-gray-900 font-bold leading-normal mb-10">
          Resources
        </h2>
        {resourcesData.map(firstItem => (
            <div key={firstItem.id} className="mb-20">
              <h3 className="mb-6 text-3xl font-bold">{firstItem.title}</h3>
              <div>
                {firstItem.data.map(secondItem => (
                    <div key={secondItem.id} className="mb-8">
                      <h4 className="mb-4 font-bold">{secondItem.title}</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {secondItem.data.map(thirdItem => (
                            <a
                                href={thirdItem.url}
                                target="_blank"
                                className="bg-gray-100 p-4 border border-gray-300 duration-700 hover:border-yellow-500 hover:bg-gray-200"
                                key={thirdItem.id}
                            >
                              <h5 className="font-bold">{thirdItem.title}</h5>
                              <div className="text-sm leading-normal text-gray-700">
                                {thirdItem.description}
                              </div>
                            </a>
                        ))}
                      </div>
                    </div>
                ))}
              </div>
            </div>
        ))}
      </Layout>
  )
}

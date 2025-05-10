'use client';
import { useState, useEffect } from 'react';

interface PdfDocument {
  id: string;
  title: string;
  description: string;
  filePath: string;
  lastUpdated: string;
  fileSize: string;
  pages: string;
}

const FleetDocumentsPage = () => {
  const [pdfDocuments, setPdfDocuments] = useState<PdfDocument[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch this data from an API or config file
    // For now, we'll use a hardcoded list that you can update as you add PDFs
    const documents: PdfDocument[] = [
      {
        id: 'World shipping fleet and services 2024',
        title: 'World shipping fleet and services 2024',
        description: 'Comprehensive review of 2024 maritime transport with data, charts and diagrams',
        filePath: '/documents/World_shipping_fleet_and_services.pdf',
        lastUpdated: '2023-06-15',
        fileSize: '1.1 MB',
        pages: '31',
      },
      {
        id: 'Top 10 Ship Owning Nation',
        title: 'Top 10 Ship Owning Nation',
        description: 'Top 10 Shipowning Nations by Total Asset Value for 2025 - VesselsValue Blog',
        filePath: '/documents/Top 10 Shipowning Nations.pdf',
        lastUpdated: '2023-07-01',
        fileSize: '1.9 MB',
        pages: '8',
      },
      
      {
        id: 'Shipping Market Outlook Q2 2025 Forecast',
        title: 'Shipping Market Outlook Q2 2025 Forecast',
        description: 'Comprehensive outlook of global shipping market with forecast of Q2 2025',
        filePath: '/documents/Shipping Market Outlook_ Q2 2025 Forecast.pdf',
        lastUpdated: '2023-07-01',
        fileSize: '2.5 MB',
        pages: '9',
      },
      {
        id: 'Global Trade Update (March 2025)',
        title: 'Global Trade Update (March 2025)',
        description: 'Comprehensive overview of global trade and the role of tariffs in international trade',
        filePath: '/documents/Global Trade Update (March 2025).pdf',
        lastUpdated: '2023-07-01',
        fileSize: '4.2 MB',
        pages: '24',
      },
      {
        id: 'Ocean Economy',
        title: 'Ocean Economy',
        description: 'Ocean economy, trade policy and the climate and development nexus. Background Note by UN Trade and Development and Food and Agriculture Organization of the United Nations to the 5th United Nations Ocean Forum.',
        filePath: '/documents/Ocean Economy.pdf',
        lastUpdated: '2023-07-01',
        fileSize: '17.6 MB',
        pages: '46',
      },
    ];

    setPdfDocuments(documents);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Fleet Documents</h1>
        <div className="flex justify-center items-center h-64">
          <p>Loading documents...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-12 bg-[#f4f4f4]">
      <h1 className="text-4xl font-extrabold text-center text-[#2a526c] drop-shadow-lg mb-6">Global Fleet and Maritime Trade</h1>
      
      <div className="space-y-16 m-2 md:m-16">
        {pdfDocuments.length > 0 ? (
          pdfDocuments.map((doc) => (
            <div key={doc.id} className="bg-[#eaf7f2] shadow-lg hover:shadow-2xl hover:bg-white transition-shadow duration-500 transform hover:-translate-y-2 hover:scale-105 rounded-lg border border-gray-100 overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-2xl text-center font-semibold text-gray-800">{doc.title}</h2>
                <p className="mt-2 text-gray-600 text-center">{doc.description}</p>
                <div className="mt-4 flex flex-wrap gap-3 items-center text-sm text-gray-500">
                  {/* <span>Last updated: {doc.lastUpdated}</span> */}
                  {/* <span>•</span> */}
                  
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-4 border-r">
                  <div className="h-96 bg-gray-100 rounded">
                    <iframe 
                      src={`${doc.filePath}#view=fitH`}
                      className="w-full h-full"
                      frameBorder="0"
                    >
                      <p className="p-4 text-red-500">
                        Your browser does not support PDF embedding. 
                        Please <a href={doc.filePath} className="text-blue-600 hover:underline">download the PDF</a> to view it.
                      </p>
                    </iframe>
                  </div>
                </div>

                <div className="md:w-64 p-4 flex flex-col gap-4">
                  <a
                    href={doc.filePath}
                    download
                    className="w-full px-4 py-3 bg-[#48bf91] text-white rounded hover:bg-[#3ca97d] transition-colors text-center"
                  >
                    Download PDF
                  </a>
                  <a
                    href={doc.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors text-center"
                  >
                    Open in New Tab
                  </a>
                  <div className="mt-auto pt-4 border-t">
                    <h3 className="font-medium text-gray-700 mb-2">Document Info</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Format: PDF</li>
                      <li>Pages: {doc.pages}</li>
                      <li>Security: Unrestricted</li>
                      <li><span>File size: {doc.fileSize}</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-700">No documents available</h2>
            <p className="mt-2 text-gray-500">PDF documents will appear here when added to the system.</p>
          </div>
        )}
      </div>

      {/* Admin Panel (for development)
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-12 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h2 className="text-lg font-semibold text-yellow-800 mb-2">Developer Notes</h2>
          <p className="text-sm text-yellow-700">
            To add a new PDF: 
            1. Place the file in <code className="bg-yellow-100 px-1 rounded">public/documents</code>
            2. Add its metadata to the <code className="bg-yellow-100 px-1 rounded">documents</code> array in this component
          </p>
        </div>
      )} */}
    </div>
  );
};

export default FleetDocumentsPage;
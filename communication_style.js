import React, { useState } from 'react';
import { ChevronRight, BarChart3, User, CheckCircle } from 'lucide-react';

const CommunicationStyleSurvey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const questions = [
    {
      id: 1,
      text: "Khi tham gia một ch ngồi",
      options: [
        { text: "Ở đầu bàn", style: "TtTTTTTTTTTTTTTTTTTTTTTTTTTTT" },
        { text: "Ở vị trí có thể quan sát được mọi người rõ nhất", style: "Nhiệt huyết" },
        { text: "Bên cạnh ai đó tôi quen", style: "Ân cần" },
        { text: "Cách n", style: "Có hệ t sadfa sdf sà sâ fhống" }
      ]
    },
    {
      id: 2, 
      text: "Khi tôi trò chuyện với một người,",
      options: [
        { text: "Tôi nhìn xuống một vài lần", style: "Ân cần" },
        { text: "Tôi nhìn thẳng vào họ trong suốt cuộc trò chuyện", style: "Trực tiếp" },
        { text: "Tôi thường xuyên nhìn vào họ", style: "Nhiệt huyết" },
        { text: "Tôi có xu hướng nhìn xung quanh (hoặc nhìn vào màn hình) nhiều hơn là nhìn người đó", style: "Có hệ thống" }
      ]
    },
    {
      id: 3,
      text: "Khi tôi chào hỏi đồng nghiệp mà tôi thân,",
      options: [
        { text: "Tôi nói xin chào nhưng thường không chạm vào họ", style: "Có hệ thống" },
        { text: "Tôi bắt tay một cách chắc chắn", style: "Trực tiếp" },
        { text: "Tôi có thể ôm họ", style: "Ân cần" },
        { text: "Tôi bắt tay một cách nhiệt tình và mỉm cười", style: "Nhiệt huyết" }
      ]
    },
    {
      id: 4,
      text: "Khi tôi nói chuyện với những người tôi quen,",
      options: [
        { text: "Tôi thích đứng ở khoảng cách thoải mái để trò chuyện", style: "Nhiệt huyết" },
        { text: "Tôi cảm thấy không thoải mái nếu mọi người đứng quá gần", style: "Có hệ thống" },
        { text: "Tôi thích đứng ở khoảng cách nhất định", style: "Trực tiếp" },
        { text: "Tôi cố gắng đứng ở khoảng cách mà tôi nghĩ họ cảm thấy thoải mái nhất", style: "Ân cần" }
      ]
    },
    {
      id: 5,
      text: "Dáng đi của tôi...",
      options: [
        { text: "Chậm rãi và thư thả", style: "Ân cần" },
        { text: "Nhanh nhẹn", style: "Nhiệt huyết" },
        { text: "Ổn định", style: "Có hệ thống" },
        { text: "Nhanh chóng và vội vã", style: "Trực tiếp" }
      ]
    },
    {
      id: 6,
      text: "Khi nghe người khác nói chuyện...",
      options: [
        { text: "Tôi đi tìm ý chính", style: "Trực tiếp" },
        { text: "Tôi chú ý đến những câu chuyện hay, sinh động", style: "Nhiệt huyết" },
        { text: "Tôi tìm các bằng chứng, dẫn chứng cụ thể", style: "Có hệ thống" },
        { text: "Tôi cố gắng tìm hiểu cảm xúc của họ", style: "Ân cần" }
      ]
    },
    {
      id: 7,
      text: "Khi tôi phát biểu trước đám đông...",
      options: [
        { text: "Tôi điều chỉnh âm lượng giọng nói để nhấn mạnh ý", style: "Nhiệt huyết" },
        { text: "Tôi nói rõ ràng nhưng không to", style: "Có hệ thống" },
        { text: "Tôi nói tương đối nhỏ", style: "Ân cần" },
        { text: "Tôi nói với giọng mạnh mẽ và tự tin", style: "Trực tiếp" }
      ]
    },
    {
      id: 8,
      text: "Khi tôi nhận thấy có xung đột xảy ra",
      options: [
        { text: "Tôi cố gắng làm dịu bầu không khí bằng cách tập trung vào những điều tích cực", style: "Nhiệt huyết" },
        { text: "Tôi lảng tránh nó", style: "Ân cần" },
        { text: "Tôi lao vào hành động ngay lập tức", style: "Trực tiếp" },
        { text: "Tôi cố gắng tìm hiểu điều gì đã gây ra vấn đề", style: "Có hệ thống" }
      ]
    },
    {
      id: 9,
      text: "Khi người khác bước vào không gian làm việc của tôi...",
      options: [
        { text: "Tôi hỏi xem rằng liệu họ có muốn ngồi xuống hay không", style: "Ân cần" },
        { text: "Tôi chỉ định vị trí mà tôi muốn họ ngồi", style: "Trực tiếp" },
        { text: "Tôi để họ tự quyết định họ có thể ngồi ở đâu hoặc có ngồi hay không", style: "Có hệ thống" },
        { text: "Tôi kéo ghế ra mời họ ngồi", style: "Nhiệt huyết" }
      ]
    },
    {
      id: 10,
      text: "Khi tôi tham gia vào việc giải quyết vấn đề...",
      options: [
        { text: "Tôi thích nêu rõ vấn đề và dẫn dắt buổi thảo luận để tìm ra giải pháp", style: "Trực tiếp" },
        { text: "Tôi lắng nghe những gì người khác nói trước tiên", style: "Ân cần" },
        { text: "Tôi tập trung vào việc tìm hiểu bối cảnh hoặc bức tranh toàn cảnh", style: "Nhiệt huyết" },
        { text: "Tôi tập trung vào việc đặt câu hỏi để thu thập dữ liệu và các sự kiện cụ thể", style: "Có hệ thống" }
      ]
    },
    {
      id: 11,
      text: "Tôi thường bắt đầu cuộc trò chuyện bằng cách...",
      options: [
        { text: "Hỏi thăm xem ngày hôm nay của người kia như thế nào", style: "Ân cần" },
        { text: "Kể một câu chuyện có liên quan", style: "Nhiệt huyết" },
        { text: "Đi thẳng vào vấn đề", style: "Trực tiếp" },
        { text: "Xác định mục đích của cuộc trò chuyện", style: "Có hệ thống" }
      ]
    },
    {
      id: 12,
      text: "Khi tôi đưa ra quyết định...",
      options: [
        { text: "Tôi xem xét rằng người khác sẽ bị ảnh hưởng bởi quyết định đó như thế nào", style: "Ân cần" },
        { text: "Tôi dựa vào sự phán đoán của riêng mình", style: "Trực tiếp" },
        { text: "Tôi truyền đạt quyết định đó theo cách mà người khác dễ tiếp nhận", style: "Nhiệt huyết" },
        { text: "Tôi dựa vào các thông lệ tốt nhất để ra quyết định một cách hợp lý", style: "Có hệ thống" }
      ]
    },
    {
      id: 13,
      text: "Khi ai đó thuyết trình...",
      options: [
        { text: "Tôi cần bài thuyết trình phải hấp dẫn và lôi cuốn", style: "Nhiệt huyết" },
        { text: "Tôi hình dung họ sẽ cảm thấy thế nào", style: "Ân cần" },
        { text: "Tôi cố gắng đánh giá tính logic của nội dung", style: "Có hệ thống" },
        { text: "Tôi cảm thấy mất kiên nhẫn nếu họ không đi thẳng vào vấn đề", style: "Trực tiếp" }
      ]
    },
    {
      id: 14,
      text: "Khi một người bạn chạm vào người tôi (ví dụ: chạm vào tay tôi)...",
      options: [
        { text: "Tôi không vấn đề gì với điều đó", style: "Nhiệt huyết" },
        { text: "Tôi hơi khó chịu với điều đó", style: "Trực tiếp" },
        { text: "Tôi cho rằng họ muốn kết nối với tôi", style: "Ân cần" },
        { text: "Thỉnh thoảng tôi cảm thấy hơi không thoải mái", style: "Có hệ thống" }
      ]
    },
    {
      id: 15,
      text: "Khi tôi cố gắng đạt được điều mình muốn...",
      options: [
        { text: "Tôi tìm cách liên kết điều tôi muốn với nhu cầu và mong muốn của người khác", style: "Ân cần" },
        { text: "Tôi đưa ra lập luận hợp lý để bảo vệ quan điểm của mình", style: "Có hệ thống" },
        { text: "Tôi coi đây là cơ hội để đề xuất những gì tôi muốn", style: "Nhiệt huyết" },
        { text: "Tôi tự tin nói rõ với người khác những gì tôi muốn (và không muốn)", style: "Trực tiếp" }
      ]
    },
    {
      id: 16,
      text: "Về cách mà người khác nhìn nhận tôi",
      options: [
        { text: "Tôi kiểm soát cẩn thận cách tôi thể hiện bản thân", style: "Trực tiếp" },
        { text: "Tôi để người khác biết tôi cảm thấy thế nào", style: "Ân cần" },
        { text: "Tôi là người khá kín đáo", style: "Có hệ thống" },
        { text: "Tôi là một cuốn sách mở (open book)", style: "Nhiệt huyết" }
      ]
    },
    {
      id: 17,
      text: "Trong một cuộc họp nhóm...",
      options: [
        { text: "Tôi có xu hướng đánh giá các ý tưởng", style: "Có hệ thống" },
        { text: "Tôi tìm cách để mọi người đều tham gia", style: "Nhiệt huyết" },
        { text: "Tôi thoải mái trong việc dẫn dắt cuộc trò chuyện", style: "Trực tiếp" },
        { text: "Tôi lắng nghe kỹ những gì mọi người muốn", style: "Ân cần" }
      ]
    },
    {
      id: 18,
      text: "Theo tôi, việc thể hiện cảm xúc cá nhân một cách công khai...",
      options: [
        { text: "Làm mọi thứ thêm thú vị", style: "Nhiệt huyết" },
        { text: "Khiến mọi người có phần không thoải mái", style: "Có hệ thống" },
        { text: "Giúp tôi kết nối và tương tác với người khác", style: "Ân cần" },
        { text: "Cản trở việc hoàn thành công việc", style: "Trực tiếp" }
      ]
    },
    {
      id: 19,
      text: "Hầu hết các cuộc họp khi làm việc là cơ hội để...",
      options: [
        { text: "Truyền đạt ý kiến của tôi và triển khai các ý tưởng", style: "Trực tiếp" },
        { text: "Xây dựng mối quan hệ với người khác khi cùng triển khai công việc", style: "Ân cần" },
        { text: "Chia sẻ các kết quả công việc và tiến độ hiện tại", style: "Nhiệt huyết" },
        { text: "Phân tích, điều tra và đảm bảo chúng tôi đang làm đúng", style: "Có hệ thống" }
      ]
    },
    {
      id: 20,
      text: "Khi tôi kể một câu chuyện...",
      options: [
        { text: "Tôi tập trung vào tình huống cụ thể của các nhân vật", style: "Ân cần" },
        { text: "Tôi tìm cách để lôi cuốn trí óc, trái tim và trí tưởng tượng của khán giả", style: "Nhiệt huyết" },
        { text: "Tôi xây dựng các luận điểm có hệ thống", style: "Có hệ thống" },
        { text: "Tôi đi thẳng vào vấn đề", style: "Trực tiếp" }
      ]
    },
    {
      id: 21,
      text: "Khi làm việc nhóm...",
      options: [
        { text: "Tôi muốn biết những người tham gia là ai", style: "Ân cần" },
        { text: "Tôi muốn biết tất cả nội dung chi tiết về cách thực hiện công việc", style: "Có hệ thống" },
        { text: "Tôi thích xác định nhiệm vụ và dẫn dắt", style: "Trực tiếp" },
        { text: "Tôi muốn nhìn thấy vai trò của mình trong bức tranh tổng thể", style: "Nhiệt huyết" }
      ]
    },
    {
      id: 22,
      text: "Khi tôi thuyết trình...",
      options: [
        { text: "Buổi thuyết trình được tổ chức tốt", style: "Có hệ thống" },
        { text: "Buổi thuyết trình chạm vào cảm xúc của mọi người", style: "Ân cần" },
        { text: "Buổi thuyết trình mạnh mẽ và đầy tính thuyết phục", style: "Trực tiếp" },
        { text: "Buổi thuyết trình lôi cuốn và tạo động lực", style: "Nhiệt huyết" }
      ]
    },
    {
      id: 23,
      text: "Khi người khác buồn hoặc khóc trước mặt tôi...",
      options: [
        { text: "Tôi khuyên họ dành một chút thời gian để tĩnh tâm", style: "Trực tiếp" },
        { text: "Tôi đưa ra những câu hỏi để tìm cách ra giúp đỡ họ tốt nhất", style: "Ân cần" },
        { text: "Tôi kể cho họ một câu chuyện mà họ có thể đồng cảm và cố gắng làm họ cảm thấy tốt hơn", style: "Nhiệt huyết" },
        { text: "Tôi nghĩ cách để thoát khỏi tình huống đó", style: "Có hệ thống" }
      ]
    },
    {
      id: 24,
      text: "Các cuộc gọi điện của tôi...",
      options: [
        { text: "Diễn ra ngắn nhất có thể", style: "Có hệ thống" },
        { text: "Chỉ tập trung vào công việc đang thực hiện", style: "Trực tiếp" },
        { text: "Sôi động và lôi cuốn", style: "Nhiệt huyết" },
        { text: "Thường kéo dài", style: "Ân cần" }
      ]
    }
  ];

  const handleAnswer = (style) => {
    const newAnswers = { ...answers, [currentQuestion]: style };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResults = () => {
    const counts = {
      "Trực tiếp": 0,
      "Nhiệt huyết": 0,
      "Ân cần": 0,
      "Có hệ thống": 0
    };

    Object.values(answers).forEach(style => {
      counts[style]++;
    });

    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    const percentages = {};
    
    Object.entries(counts).forEach(([style, count]) => {
      percentages[style] = Math.round((count / total) * 100);
    });

    return { counts, percentages };
  };

  const resetSurvey = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setShowIntro(true);
  };

  const getStyleColor = (style) => {
    const colors = {
      "Trực tiếp": "bg-red-500",
      "Nhiệt huyết": "bg-orange-500", 
      "Ân cần": "bg-green-500",
      "Có hệ thống": "bg-blue-500"
    };
    return colors[style] || "bg-gray-500";
  };

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100;

  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full">
                <User className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">Đánh giá Phong cách Giao tiếp</h1>
            <p className="text-lg opacity-90">Khám phá phong cách giao tiếp của bạn</p>
          </div>
          
          <div className="p-8">
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Hướng dẫn làm bài:</h3>
                <ul className="text-yellow-700 space-y-1 text-sm">
                  <li>• Chọn câu mô tả đúng nhất phong cách giao tiếp của bạn</li>
                  <li>• Nếu có nhiều câu phù hợp, hãy chọn phong cách bạn thể hiện nhất khi chịu áp lực</li>
                  <li>• Hoàn thành bài đánh giá một cách nhanh nhất có thể (dưới 7 phút)</li>
                  <li>• Đối với làm việc từ xa, hãy tưởng tượng như đang làm việc tại văn phòng</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-blue-800">4 Phong cách chính:</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <span className="font-medium">Trực tiếp</span> - Quyết đoán, thẳng thắn
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                      <span className="font-medium">Nhiệt huyết</span> - Năng động, lôi cuốn
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="font-medium">Ân cần</span> - Chu đáo, lắng nghe
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span className="font-medium">Có hệ thống</span> - Logic, có tổ chức
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="font-semibold text-green-800">Thông tin bài test:</h3>
                  </div>
                  <div className="space-y-2 text-sm text-green-700">
                    <p>• <strong>24 câu hỏi</strong> - Mỗi lần 1 câu</p>
                    <p>• <strong>Thời gian:</strong> Dưới 7 phút</p>
                    <p>• <strong>Kết quả:</strong> Phần trăm từng phong cách</p>
                    <p>• <strong>Mục đích:</strong> Hiểu rõ cách giao tiếp của bạn</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setShowIntro(false)}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center mx-auto"
                >
                  Bắt đầu làm bài
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const { counts, percentages } = calculateResults();
    const sortedResults = Object.entries(percentages)
      .sort(([,a], [,b]) => b - a);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full">
                <CheckCircle className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">🎉 Chúc mừng, bạn thuộc nhóm người có phong cách giao tiếp:</h1>
            <div className="text-2xl font-bold uppercase tracking-wide">
              {sortedResults.map(([style], index) => (
                <span key={style}>
                  {style}
                  {index < sortedResults.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-800">Chi tiết điểm phong cách giao tiếp của bạn:</h2>
              </div>
              
              <div className="space-y-4">
                {sortedResults.map(([style, percentage], index) => (
                  <div key={style} className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-lg font-semibold mr-2">{index + 1}.</span>
                        <span className="text-lg font-semibold">{style}:</span>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${getStyleColor(style)} transition-all duration-1000`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <h3 className="font-semibold text-blue-800 mb-3">Ý nghĩa các phong cách giao tiếp:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-red-700">Trực tiếp</div>
                      <div className="text-gray-600">Quyết đoán, thẳng thắn, tập trung vào kết quả, dẫn dắt tình huống</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-orange-700">Nhiệt huyết</div>
                      <div className="text-gray-600">Năng động, sinh động, lôi cuốn, tạo động lực cho người khác</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-green-700">Ân cần</div>
                      <div className="text-gray-600">Chu đáo, lắng nghe, quan tâm đến cảm xúc và nhu cầu người khác</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-blue-700">Có hệ thống</div>
                      <div className="text-gray-600">Logic, có tổ chức, chú trọng chi tiết và quy trình</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={resetSurvey}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Làm lại bài test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Progress Bar */}
        <div className="bg-gray-200 h-2">
          <div 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <User className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Câu hỏi {currentQuestion + 1}/{questions.length}
            </h1>
            <div className="text-sm text-gray-500">
              {Math.round(progress)}% hoàn thành
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <h2 className="text-xl font-semibold text-gray-800 leading-relaxed">
                {questions[currentQuestion].text}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.style)}
                  className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-blue-500 flex items-center justify-center mr-4 group-hover:bg-blue-500 transition-all duration-200">
                      <span className="text-sm font-semibold text-gray-500 group-hover:text-white">
                        {String.fromCharCode(97 + index)}
                      </span>
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                      {option.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Back button */}
          {currentQuestion > 0 && (
            <div className="text-center">
              <button
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                ← Quay lại câu trước
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunicationStyleSurvey;

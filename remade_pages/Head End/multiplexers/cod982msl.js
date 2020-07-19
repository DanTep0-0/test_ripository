//multiplexers + scramblers + qam_modulators
import { StaticQuery, graphql } from "gatsby"
import React from "react"
import ProductInfo from "../components/ProductInfo"
import {Helmet} from "react-helmet";


export default () => (
  <StaticQuery
  query = {
      graphql`
        query   {
              cod982msl: file(relativePath: {eq: "cod912.jpg"}) {
                  childImageSharp {
                      fluid(maxWidth: 854, maxHeight: 259) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
              scheme_cod982msl: file(relativePath: {eq: "scheme_cod982msl.jpg"}) {
                  childImageSharp {
                      fluid(maxWidth: 640, maxHeight: 254) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
          }
    `}
    render= {({ cod982msl, scheme_cod982msl }) => (
      <>

      <Helmet>
        <title>Мультиплексор COD982MSL | Оборудование для головной станции ТВ | Crypton.com.ua</title>
        <meta name="description" content="Мультиплексор COD982MSL - это многофункциональный восьмивходовый сервер услуг цифрового телевидения.Выполняет функциии DVB ремультиплексора, DVB скремблера, DVB-S модулятора, а также NIT, EPG инжектора" />
      </Helmet>

      <ProductInfo
        categories={[{text: "Мультиплексоры", link: "multiplexers"}, {text: "Скремблеры", link: "scramblers"}, {text: "Модуляторы", link: "qam_modulators"}]}
        name="Мультиплексор с модулятором COD982MSL"
        photos={[cod982msl.childImageSharp.fluid, scheme_cod982msl.childImageSharp.fluid]}
        description={() => (
          <>
          <div className="product_block">
            <p>Мультиплексор COD982MSL - это многофункциональный восьмивходовый сервер услуг цифрового телевидения. Устройство, главным образом, предназначено для работы в цифровых широковещательных DVB сетях и может выполнять следующие функции:</p>
          </div>
          <div className="product_block">
            <ul>
              <li>DVB ремультиплексор</li>
              <li>DVB скремблер и генератор служебной информации CAS Crypton</li>
              <li>NIT, EPG инжектор</li>
              <li>DVB-S модулятор</li>
            </ul>
          </div>
          <div className="product_block">
            <p>Надежное и удобное программное обеспечение позволяет вам быстро освоить технологию цифрового телевизионного вещания и построить свою сеть с учетом особенностей вашего бизнеса.
            </p>
          </div>
          <div className="product_block">
            <h4>Возможности</h4>
            <ul className="bigger_margin_ul">
              <li>Восемь ASI входов. Транспортный поток от различных источников (например, с профессиональных цифровых ресиверов с ASI выходами) поступает на ASI входы ремультиплексора. Каждый из восьми ASI входов поддерживает до 32-х программ. Суммарно со всех входов может быть отобрано до 24-х программ, которые после мультиплексирования поступают на встроенный DVB скремблер и, далее – на выход устройства. В устройстве реализован механизм автоматического определения типа входного ASI сигнала.</li>
              <li>Приоритетное мультиплексиование. Гибкая настройка приоритетов программ пзволяет наиболее эффективно использовать частотный ресурс. Каналам с высокой динамикой изображений и рейтингом может быть присвоен высокий приоритет, что, в свою очередь, обеспечит их прохождение пок аналу с максимальным качеством.</li>
              <li>Анализ входного потока. При помощи программного комплекcа “Crypton Software Suite” каждый из 8-ми входных потоков может быть проанализирован на предмет определения присутствия в нем тех или иных сервисов и скрытых каналов передачи данных (т.е. тех PID’ов, ссылки на которые отсутствуют в сервисных таблицах). Также может быть осуществлен подсчет скорости этих потоков. Кроме этого, для каждого сервиса можно подсчитать среднюю битовую скорость транспортного потока за любой произвольный интервал времени.</li>
              <li>Анализатор качества мультиплексирования Современное спутниковое вещание большинства цифровых телевизионных программ ведется с переменной скоростью потока, что позволяет наиболее эффективно использовать пропускную способность дорогостоящего спутникового канала, но создает дополнительные трудности ремультиплексирования этих программ кабельным оператором. Анализатор качества мультиплексирования позволяет оценить степень корректности сформированного нового многопрограммного транспортного поток путем сбора статистики о превышении допустимой пользовательской скорости канала передачи за выбранный вами временной интервал.</li>
              <li>Редактирование сервисной информации. В устройстве предусмотрена стандартная для таких устройств функция редактирования сервисной информации, что обоеспечивает дополнительную гибкость при формировании нового многопрограммного транспортного потока.</li>
              <li>Поддержка DVB NIT/EPG. Данное устройство может поддерживать DVB NIT/EPG, при условии активации этой опции в загруженном программном обеспечении. Реализованная в этом устройстве подсистема NIT/EPG полностью соответствует DVB спецификации и может приниматься на любых абонентских приемниках, поддерживающих эту функцию. Расписание готовится и сохраняется в устройство специальной утилитой “EPG Editor” входящей в комплект программного обеспечения “Crypton Software Suite”.</li>
              <li>DVB скремблер CAS Crypton. DVB Скремблер cо встроенной CAS Crypton позволяют использовать COD982ASI для обеспечения условного доступа в цифровой телевизионной сети вещания. При этом важно отметить высокую надежность системы за счет автономности этой функции в каждом отдельном устройстве в полном соответствии с требованиями DVB-CAS.</li>
              <li>Высокопроизводительный 100Mbit/s TCP/IP порт. Предназначен главным образом для высокоскоростной передачи абонентской, в режиме кодера CAS Crypton, информации и NIT/EPG данных. В режиме IP инкапсулятора порт используется для передачи видео/аудио потоков или Интернета.</li>
              <li>До 24-х цифровых теле- и радио- программ. Входной поток может состоять из 24 программ, которые могут быть обработаны в соответствии с той или иной решаемой задачей. Для сохранения в выходном потоке качественных характеристик входного потока в устройстве предусмотрена коррекция PCR.</li>
              <li>До 8 сервисных групп. 24 телевизионные программы, поступающие на вход устройства, могут быть организованы в 8 сервиных групп кодирования, каждая из которых имеет свой независимый ключ скремблирования и список абонентов, которым разрешен просмотр в текущий момент времени.</li>
              <li>ASI выход. Устройство COD982ASI имеет только ASI выход, поддерживающий все основные режимы работы DVB ASI: «байтовый/пакетный», «188/204» в соответствии с EN50083-9.</li>
              <li>Управление. Управление всеми устройствами в сети осуществляется с персонального компьютера оператора на котором установлен пакет программного обеспечения “Crypton Software Suite” через активное TCP/IP соединение.</li>
              <li>Перегружаемое ПО. Для COD982ASI предусмотрена процедура замены программного обеспечения. Загрузка новой версии программного обеспечения производится при помощи соответствующей функции программы “DTV Master” и предварительно полученного кода программы и лицензионного ключа.</li>
            </ul>
          </div>
          <div className="product_block">
            <h4>Краткое описание основных блоков</h4>
            <ul className="bigger_margin_ul">
              <li>ASI INPUT I/F. В качестве входного и выходного интерфейса передачи цифрового транспортного потока устройство использует DVB ASI интерфейс согласно EN 50083-9. Поддерживаются все основные режимы: «байтовый/пакетный», «188/204 байт». ASI входы определяют режим источника автоматически. ASI выход может быть настроен произвольно.</li>
              <li>DVB MULTIPLEXER На каждый вход мультиплексора может быть подано до 32-х предварительно сформированных цифровых программ (аудио/видео/данные). Из всех максимум 256-ти программ (32 программы на каждый вход, 8 входов) может быть отобрано максимум 24 программы, которые будут поступать на скремблер и выход устройства. Система задания приоритетов позволяет оптимально распределить доступную полосу передачи данных. В этом, как и в других цифровых устройствах «Компании Криптон», предусмотрена возможность редактирования сервисной информации в соответствии с EN 300468.</li>
              <li>DVB SCRAMBLER Используемый в устройстве скремблер является DVB-совместимым и соответствует спецификации DVB-CAS ETR-289. Он производит выборочное скремблирование цифровых телевизионных программ. Главная цель скремблирования исключить несанкционированный просмотр телевизионных программ.</li>
              <li>CAS CRYPTON SMS GENERATOR Генератор служебной информации системы условного доступа CAS Crypton из списков абонентов для каждой группы кодирования формирует необходимые SMS сообщения, необходимые абонентскому приемнику для обеспечения авторизованного доступа к тем либо иным ресурсам цифровой телевизионной сети. Все 24 программы могут быть организованы в максимум 8 независимых групп кодирования, каждая из которых кодируется своим ключом и имеет свой список абонентов, которым разрешен просмотр в текущий момент времени.</li>
              <li>DVB SI INJECTOR. Инжектор сервисной информации предназначен для внедрения в транспортный поток сервисных таблиц, таких как NIT, EIT(EPG), TOT и др.</li>
              <li>Device control. Основная задача модуля управления – обеспечение эффективного управления устройством с рабочего места оператора сети вещания с установленным на нем программным обеспечением “Crypton Software Suite”. В режимах IPTV или IP to DVB инкапсуляции модуль управления осуществляет непрерывное TV вещание в IP сети или, наоборот, инкапсуляцию IP данных и передачу их на DVB мультиплексор.</li>
              <li>DVB-S modulator Встроенный в устройство QPSK-модулятор перестраивается в диапазоне 950-1500 МГц или 1450-1750 МГц (в зависимости от исполнения) и служит контрольным выходом транспортного потока либо, в ряде случаев, может быть использован как источник сигнала для одноканального микроволнового передатчика, либо сумматора мощности в случае использования групповых передатчиков. Используя QPSK-QAM трансмодулятор, можно довольно просто организовать вещание в кабельные сети.</li>
            </ul>
          </div>
          </>
        )}
        propertiesTable={() => (<>
          <div className="properties_section">
            <h4>DVB-ASI входы/выходы</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Количество входов</span></dt>
                <dd><span>8</span></dd>
                <dt><span>Спецификация</span></dt>
                <dd><span>EN 50083-9</span></dd>
                <dt><span>Импеданс выхода</span></dt>
                <dd><span>75 Ом</span></dd>
                <dt><span>Тип разъема</span></dt>
                <dd><span>BNC-type</span></dd>
                <dt><span>Макс. скорость выходного потока, Мбит/с</span></dt>
                <dd><span>48</span></dd>
                <dt><span>Макс. количество программ во входном потоке</span></dt>
                <dd><span>32/вход</span></dd>
                <dt><span>Способ мультиплексирования</span></dt>
                <dd><span>TS (MPEG2/MPEG4)</span></dd>
              </dl>
            </section>
            </div>
            <div className="properties_section">
              <h4>Условный доступ</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Способ скремблирования</span></dt>
                  <dd><span>DVB-CAS</span></dd>
                  <dt><span>Система условного доступа</span></dt>
                  <dd><span>CAS Crypton</span></dd>
                  <dt><span>Макс. количество мультиплексированных программ</span></dt>
                  <dd><span>24</span></dd>
                  <dt><span>Макс. количество групп кодирования</span></dt>
                  <dd><span>8</span></dd>
                  <dt><span>Поддерживаемая сервисная информация</span></dt>
                  <dd><span>SDT, TOT,TDT, EIT, NIT</span></dd>
                  <dt><span>Спецификация</span></dt>
                  <dd><span>EN300468</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Выход DVB-S</h4>
              <section className="properties_group">
                <dl className="flexbox">
                <dt><span>Тип модулятора</span></dt>
                <dd><span>QPSK модулятор</span></dd>
                <dt><span>Спецификация</span></dt>
                <dd><span>EN 30042-1</span></dd>
                <dt><span>Импеданс выхода</span></dt>
                <dd><span>75 Ом</span></dd>
                <dt><span>Тип разъема</span></dt>
                <dd><span>BNC-type</span></dd>
                <dt><span>Диапазон выходных частот, МГц</span></dt>
                <dd><span>950-1750</span></dd>
                <dt><span>Диапазон символьных скоростей Мсим/с</span></dt>
                <dd><span>25-30</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Технические характеристики</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Напряжение питания, В</span></dt>
                  <dd><span>90-260</span></dd>
                  <dt><span>Частота переменного напряжения, Гц</span></dt>
                  <dd><span>50-60</span></dd>
                  <dt><span>Потребляемая мощность, Вт</span></dt>
                  <dd><span>Не более 60</span></dd>
                  <dt><span>Диапазон рабочих температур, *С</span></dt>
                  <dd><span>10-30</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Габаритные размеры</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Ширина, мм</span></dt>
                  <dd><span>485</span></dd>
                  <dt><span>Глубина, мм</span></dt>
                  <dd><span>406</span></dd>
                  <dt><span>Высота, мм</span></dt>
                  <dd><span>44</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Другое</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Управление устройством</span></dt>
                  <dd><span>100Мбит/с Ethernet, TCP/IP</span></dd>
                  <dt><span>Программное обеспечение</span></dt>
                  <dd><span>Crypton Software Suite</span></dd>
                </dl>
              </section>
            </div>

          </>)}
        />
      </>
    )}
  />)

// краткое описание
// Мультиплексор COD982MSL - это многофункциональный восьмивходовый сервер услуг цифрового телевидения. Устройство, главным образом, предназначено для работы в цифровых широковещательных DVB сетях и  может выполнять следующие функции:
// <ul>
// <li>DVB ремультиплексор;</li>
// <li>DVB скремблер и генератор служебной информации CAS Crypton;</li>
// <li>NIT, EPG инжектор;</li>
// <li>DVB-S модулятор</li></ul>
// Надежное и удобное программное обеспечение позволяет вам быстро освоить технологию цифрового телевизионного вещания и построить свою сеть с учетом особенностей вашего бизнеса.

// Конструкция:
// Устройство COD982MSL выполнено в виде самостоятельного металлического корпуса Multipac со встроенным источником питания. Корпус легко монтируется в 19inch приборные шкафы. Высота корпуса -1U (44 мм), глубина - 295 мм, ширина - 483 мм.

// <tr><td><b>Входы</b></td><td>8 многопрограммных DVB ASI входов</td><td>Спецификация EN 50083-9, разъемы BNC(75 Ом)</td></tr>
// <tr><td>Максимальное количество программ во входном потоке</td><td>32/вход</td><td> </td></tr>
// <tr><td>Способ мультиплексирования</td><td>TS (MPEG2/MPEG4)</td><td>ISO/IEC13818-1</td></tr>
// <tr><td><b>Условный доступ</b></td><td> </td><td> </td></tr>
// <tr><td>Способ скремблирования</td><td>DVB-CAS</td><td>ETR289</td></tr>
// <tr><td>Система условного доступа</td><td>CAS Crypton</td><td> </td></tr>
// <tr><td>Максимальное количество мультиплексированных программ</td><td>24</td><td>Суммарно для всех входов</td></tr>
// <tr><td>Максимальное количество групп кодирования</td><td>8</td><td></td></tr>
// <tr><td>Поддерживаемая сервисная информация </td><td>SDT, TOT,TDT, EIT, NIT</td><td>EN300468</td></tr>
// <tr><td><b>Выход</b></td><td>DVB ASI</td><td>Спецификация EN 50083-9, разъем BNC(75 Ом)</td></tr>
// <tr><td>Максимальная скорость выходного потока, Мбит/с</td><td>48</td><td></td></tr>
// <tr><td><b>Выход DVB-S</b></td><td>QPSK модулятор</td><td>EN300421, разъем SMA(50 Ом)</td></tr>
// <tr><td>Диапазон выходных частот, МГц</td><td>950-1750</td><td>По согласованию с заказчиком возможен 1450-1950 Точность установки частоты ±5 кГц</td></tr>
// <tr><td>Диапазон символьных скоростей Мсим/с</td><td>25 - 30</td><td>Набор дискретных значений с шагом 0,5 Мсимв/с</td></tr>
// <tr><td>Уровень внеполосных излучений, дБ</td><td></td><td> </td></tr>
// <tr><td>Уровень гармоник несущей, дБ</td><td></td><td> </td></tr>
// <tr><td>Фазовый шум несущей менее, дБ/Гц </td><td> </td><td> </td></tr>
// <tr><td>1 кГц</td><td>70</td><td> </td></tr>
// <tr><td>10 кГц</td><td>80</td><td> </td></tr>
// <tr><td>100 кГц</td><td>90</td><td> </td></tr>
// <tr><td>MER, dB</td><td>&gt; 18</td><td>В диапазоне 950 – 1700 МГц</td></tr>
// <tr><td>Выходная мощность, dBm</td><td>0 - 7</td><td>В диапазоне 950 – 1700 МГц</td></tr>
// <tr><td>Выходной разъем</td><td>SMA</td><td>50 Ом</td></tr>
// <tr><td>Управление устройством</td><td>100Мбит/с Ethernet, TCP/IP</td><td>Разъем RJ45</td></tr>
// <tr><td>Программное обеспечение</td><td>«Crypton Software Suite»</td><td>
// </td></tr><tr><td>Напряжение питания, В</td><td>90 - 260</td><td>Переменное напряжение частотой 50/60 Гц</td></tr>
// <tr><td>Потребляемая мощность, Вт (не более)</td><td>60</td><td></td></tr>
// <tr><td>Диапазон рабочих температур, ?С</td><td>10-30</td><td></td></tr>
// <tr><td>Габаритные размеры</td><td> </td><td> </td></tr>
// <tr><td>Ширина, мм</td><td>485</td><td></td></tr>
// <tr><td>Глубина, мм</td><td>406</td><td></td></tr>
// <tr><td>Высота, мм</td><td>44</td><td></td></tr>

import { CheckCircle, Lock } from "phosphor-react";
import { LessonProps } from "./types";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import className from "classnames";

export const Lesson: React.FC<LessonProps> = (props) => {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);

  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>` $
      <div
        className={className(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500",
          {
            "bg-green-500": isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={className(
                "text-sm  font-medium flex items-center gap-2",
                {
                  "text-white": isActiveLesson,
                  "text-blue-500": !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span
            className={className(
              "text-xs rounded px-2 py-[0.125rem] text-white border font-bold",
              {
                "border-green-300": !isActiveLesson,
                "border-white": isActiveLesson,
              }
            )}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={className(" mt-5 block", {
            "text-white": isActiveLesson,
            "text-gray-200": !isLessonAvailable,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
};

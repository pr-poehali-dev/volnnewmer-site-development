import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const ProjectControls = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDownload = () => {
    // Функция скачивания будет доступна позже
    alert(
      "Функция скачивания в разработке. Следите за обновлениями в Telegram: https://t.me/+QgiLIa1gFRY4Y2Iy",
    );
  };

  const handleDeploy = () => {
    window.open("https://docs.poehali.dev/deploy/publish", "_blank");
  };

  const handleGitHub = () => {
    window.open("https://docs.poehali.dev/deploy/github", "_blank");
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`bg-white rounded-lg shadow-lg border transition-all duration-300 ${
          isExpanded ? "p-4 space-y-2" : "p-2"
        }`}
      >
        {isExpanded ? (
          <div className="flex flex-col space-y-2 min-w-[200px]">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDeploy}
              className="justify-start"
            >
              <Icon name="Globe" className="mr-2" size={16} />
              Опубликовать
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleGitHub}
              className="justify-start"
            >
              <Icon name="Github" className="mr-2" size={16} />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="justify-start"
            >
              <Icon name="Download" className="mr-2" size={16} />
              Скачать код
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="justify-start text-gray-500"
            >
              <Icon name="X" className="mr-2" size={16} />
              Свернуть
            </Button>
          </div>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(true)}
            className="p-2"
            title="Управление проектом"
          >
            <Icon name="Settings" size={20} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectControls;
